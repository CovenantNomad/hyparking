import { useQuery } from "react-query"
import { searchVehicle } from "../api/search"


export const useSearchVehicle = (searchOption) => {
  return useQuery(['searchVehicle', searchOption], () => searchVehicle(searchOption), {
    enabled: !!searchOption
  })
}