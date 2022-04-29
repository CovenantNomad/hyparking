import { useQuery } from "react-query"
import { getNumbers } from "../api/search"


export const useGetNumber = () => {
  return useQuery('getNumbers', getNumbers)
}