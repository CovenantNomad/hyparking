import { useRecoilValue } from "recoil";
import { authAtom } from "../stores/state";

export default function useAuth() {
  return useRecoilValue(authAtom)
}