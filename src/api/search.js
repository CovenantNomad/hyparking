import { collection, getDocs, orderBy, query, where } from "firebase/firestore"
import { db } from "../configs/firebaseConfig"

export const searchPlate = async (plateNumber) => {
  let temp = []
  try {
    const plateQuery = query(collection(db, "vehicles"), where("plateNumber", "==", plateNumber.toString()), orderBy("owner"));
    const querySnapshot = await getDocs(plateQuery);
    querySnapshot.forEach((doc) => {
      temp.push(doc.data())
    });
    return temp
  } catch (error) {
    console.log(error)
  }
}

export const searchVehicle = async (condition) => {
  let temp = []
  let vehicleQuery
  try {
    if (condition === "전체") {
      vehicleQuery = query(collection(db, "vehicles"), orderBy("owner"));
    } else {
      vehicleQuery = query(collection(db, "vehicles"), where("division", "==", condition), orderBy("owner"));
    }
    const querySnapshot = await getDocs(vehicleQuery);
    querySnapshot.forEach((doc) => {
      temp.push(doc.data())
    });
    return temp
  } catch (error) {
    console.log(error)
  }
}

export const getNumbers = async () => {
  let temp = []
  try {
    const numberQuery = query(collection(db, 'numOfVehicle'), orderBy("index"))
    const querySnapshot = await getDocs(numberQuery);
    querySnapshot.forEach((doc) => {
      temp.push(doc.data())
    });
    return temp
  } catch (error) {
    console.log(error)
  }
}