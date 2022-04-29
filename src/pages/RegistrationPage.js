import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { db } from '../configs/firebaseConfig';
import { collection, doc, getDocs, addDoc, query, runTransaction, where } from 'firebase/firestore';
//components
import Container from '../components/Container';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import RegistrationForm from '../components/RegistrationForm';
import SuccessModal from '../components/SuccessModal';

const RegistrationPage = () => {
  const [ open, setOpen ] = useState(false)
  const [ modalContent, setModalContent ] = useState({
    result: true,
    title: "",
    subtitle: "",
    plateNumber: "",
    errorMessage: ""
  })
  const { handleSubmit, register, formState: { errors }, reset } = useForm()


  const onSubmit = async (data) => {
    const fullPlateNumber = data.plateFront + " " + data.plateNumber

    const submitData = {
      ...data,
      fullPlateNumber
    }

    try {
      const checkQuery = query(collection(db, "vehicles"), where("fullPlateNumber", "==", submitData.fullPlateNumber));
      const response = await getDocs(checkQuery)
      if (!response.empty) {
        setModalContent({
          result: false,
          title: "등록실패",
          subtitle: "등록하는데 실패하였습니다",
          plateNumber: submitData.fullPlateNumber,
          errorMessage: "실패이유 : 이미 등록된 차량이 있습니다"
        })
      } else {
        await addDoc(collection(db, 'vehicles'), submitData)
        await runTransaction(db, async (transaction) => {
          const totalRef = doc(db, "numOfVehicle", "전체");
          const totalDoc = await transaction.get(totalRef);
          if (!totalDoc.exists()) {
            throw "Total number of vehicle document does not exist!";
          }

          const numberRef = doc(db, "numOfVehicle", submitData.division);
          const numberDoc = await transaction.get(numberRef);
          if (!numberDoc.exists()) {
            throw "Division Document does not exist!";
          }
      

          const newTotalNumber = totalDoc.data().totalNumber + 1;
          transaction.update(totalRef, { totalNumber: newTotalNumber });

          const newDivisionNumber = numberDoc.data().totalNumber + 1;
          transaction.update(numberRef, { totalNumber: newDivisionNumber });
        });

        setModalContent({
          result: true,
          title: "등록성공",
          subtitle: "성공적으로 등록하였습니다",
          plateNumber: submitData.fullPlateNumber 
        })
        reset({
          owner: "",
          position: "",
          division: "none",
          plateFront: "",
          plateNumber: "",
          phoneNumber: ""
        })
      }
    } catch (e) {
      console.log("Transaction failed: ", e);
      setModalContent({
        result: false,
        title: "등록실패",
        subtitle: "등록하는데 실패하였습니다",
        plateNumber: submitData.fullPlateNumber,
        errorMessage: "실패이유 : 서버에 등록하지 못했습니다."
      })
    }

    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }

  return (
    <Container>
      <Navbar />
      <Logo />
      <form onSubmit={handleSubmit(onSubmit)}>
        <RegistrationForm register={register} errors={errors}/>
      </form>
      {open && <SuccessModal closeModal={closeModal} content={modalContent}/>}
    </Container>
  );
}

export default RegistrationPage;