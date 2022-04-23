import { useQuery } from "react-query"
import { searchPlate } from "../api/search"

export const useSearch = (plateNumber) => {
  return useQuery(['searchPlate', plateNumber], () => searchPlate(plateNumber), {
    enabled: !!plateNumber
  })
}