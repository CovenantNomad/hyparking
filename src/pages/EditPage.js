import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { db } from '../configs/firebaseConfig';
import { collection, doc, getDocs, addDoc, query, runTransaction, where, updateDoc, getDoc, deleteDoc } from 'firebase/firestore';
//components
import Container from '../components/Container';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import SuccessModal from '../components/SuccessModal';
import { useLocation } from 'react-router-dom';
import UpdateForm from '../components/UpdateForm';

const EditPage = ( ) => {
  const { state } = useLocation()
  const [ open, setOpen ] = useState(false)
  const [ modalContent, setModalContent ] = useState({
    title: "",
    subtitle: "",
    result: true,
    plateNumber: "",
    errorMessage: ""
  })
  const { handleSubmit, register, formState: { errors }, reset } = useForm({
    defaultValues: {
      owner: state.owner,
      division: state.division,
      position: state.position,
      plateFront: state.plateFront,
      plateNumber: state.plateNumber,
      phoneNumber: state.phoneNumber,
    }
  })

  const onSubmit = async (data) => {
    const fullPlateNumber = data.plateFront + " " + data.plateNumber

    const submitData = {
      ...data,
      fullPlateNumber
    }

    try {
      let docId = ""
      const updateQuery = query(collection(db, "vehicles"), where("fullPlateNumber", "==", submitData.fullPlateNumber));
      const docSnap = await getDocs(updateQuery);
      const temp = []
      docSnap.forEach(doc => {
        temp.push(doc.id)
      })
      docId = temp[0]
      const updateRef = doc(db, "vehicles", docId)
      await updateDoc(updateRef, submitData)

      if (state.division !== submitData.division) {
        await runTransaction(db, async (transaction) => {
          const oldRef = doc(db, "numOfVehicle", state.division);
          const oldDoc = await transaction.get(oldRef);
          if (!oldDoc.exists()) {
            throw "Total number of vehicle document does not exist!";
          }
  
          const newRef = doc(db, "numOfVehicle", submitData.division);
          const newDoc = await transaction.get(newRef);
          if (!newDoc.exists()) {
            throw "Division Document does not exist!";
          }
      
  
          const newTotalNumber = oldDoc.data().totalNumber - 1;
          transaction.update(oldRef, { totalNumber: newTotalNumber });
  
          const newDivisionNumber = newDoc.data().totalNumber + 1;
          transaction.update(newRef, { totalNumber: newDivisionNumber });
        });
      }

      
      setModalContent({
        result: true,
        title: "???????????? ??????",
        subtitle: "??????????????? ???????????? ???????????????",
        plateNumber: submitData.fullPlateNumber 
      })
    } catch (e) {
      console.log("Transaction failed: ", e);
      setModalContent({
        result: false,
        title: "???????????? ??????",
        subtitle: "???????????? ????????? ?????????????????????",
        plateNumber: submitData.fullPlateNumber,
        errorMessage: "???????????? : ???????????? ?????????????????? ???????????????."
      })
    }

    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }

  const onDelete = async (fullPlateNumber) => {
    try {
      let docId = ""
      const updateQuery = query(collection(db, "vehicles"), where("fullPlateNumber", "==", fullPlateNumber));
      const docSnap = await getDocs(updateQuery);
      const temp = []
      docSnap.forEach(doc => {
        temp.push(doc.id)
      })
      docId = temp[0]
      const updateRef = doc(db, "vehicles", docId)
      await deleteDoc(updateRef)

      await runTransaction(db, async (transaction) => {
        const totalRef = doc(db, "numOfVehicle", "??????");
        const totalDoc = await transaction.get(totalRef);
        if (!totalDoc.exists()) {
          throw "Total number of vehicle document does not exist!";
        }

        const numberRef = doc(db, "numOfVehicle", state.division);
        const numberDoc = await transaction.get(numberRef);
        if (!numberDoc.exists()) {
          throw "Division Document does not exist!";
        }
    

        const newTotalNumber = totalDoc.data().totalNumber - 1;
        transaction.update(totalRef, { totalNumber: newTotalNumber });

        const newDivisionNumber = numberDoc.data().totalNumber - 1;
        transaction.update(numberRef, { totalNumber: newDivisionNumber });
      });

      setModalContent({
        result: true,
        title: "???????????? ??????",
        subtitle: "??????????????? ?????? ???????????????",
        plateNumber: fullPlateNumber 
      })

      reset({
        owner: "",
        position: "",
        division: "none",
        plateFront: "",
        plateNumber: "",
        phoneNumber: ""
      })
    } catch (e) {
      console.log("Transaction failed: ", e);
      setModalContent({
        result: false,
        title: "???????????? ??????",
        subtitle: "?????? ????????? ?????????????????????",
        plateNumber: fullPlateNumber,
        errorMessage: "???????????? : ???????????? ?????????????????? ???????????????."
      })
    }
    setOpen(true)
  }

  return (
    <Container>
      <Navbar />
      <Logo />
      <form onSubmit={handleSubmit(onSubmit)}>
        <UpdateForm register={register} errors={errors} onDelete={onDelete} fullPlateNumber={state.plateFront + " " + state.plateNumber}/>
      </form>
      {open && <SuccessModal closeModal={closeModal} content={modalContent}/>}
    </Container>
  );
}

export default EditPage;