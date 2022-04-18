import { useRecoilValue } from "recoil";
import { authState } from "../stores/autState";

export default function useUser() {
  return useRecoilValue(authState)
}