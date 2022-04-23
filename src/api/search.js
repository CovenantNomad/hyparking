import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../configs/firebaseConfig"

export const searchPlate = async (plateNumber) => {
  let temp = []
  try {
    const plateQuery = query(collection(db, "vehicles"), where("plateNumber", "==", plateNumber));
    const querySnapshot = await getDocs(plateQuery);
    querySnapshot.forEach((doc) => {
      temp.push(doc.data())
    });
    return temp
  } catch (error) {
    console.log(error)
  }
}