import React, { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { browserLocalPersistence, browserSessionPersistence, setPersistence, signInWithEmailAndPassword } from 'firebase/auth'
// components
import AuthInput from '../components/AuthInput';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { authAtom } from '../stores/state';
import { useNavigate } from 'react-router-dom';
import { auth } from '../configs/firebaseConfig';
import Logo from '../components/Logo';

const Onboarding = () => {
  const navigate = useNavigate()
  const authState = useRecoilValue(authAtom)
  const setAuthState = useSetRecoilState(authAtom)
  const [ savedEmail, setSavedEamil] = useState(true)
  const { handleSubmit, formState: { errors }, register } = useForm({
    defaultValues: {
      email: localStorage.getItem("saved-email") || "",
    }
  })

  const onSubmit = async (data) => {
    const { email, password, rememberMe} = data

    setPersistence(auth, rememberMe ? browserLocalPersistence : browserSessionPersistence)
    .then(() => {
      return signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const token = await userCredential.user.getIdToken()
        if (rememberMe) {
          localStorage.setItem("saved-email", userCredential.user.email)
        }
        setAuthState({
          isLoggedIn: true,
          token
        })
      })
    })
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start lg:justify-center">
      <div className="container py-10 px-5 lg:border rounded-lg max-w-xl">
        <Logo />
        <form className="mt-8 space-y-6" action="#" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm -space-y-px">
            <AuthInput 
              name={"email"}
              type={"email"}
              placeholder={"이메일"}
              register={register}
              required
              top
            />
            <AuthInput 
              name={"password"}
              type={"password"}
              placeholder={"비밀번호"}
              register={register}
              required
            />
          </div>
          <div className="flex items-start">
            <input
              id="rememberMe"
              name="rememberMe"
              type="checkbox"
              {...register('rememberMe')}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              로그인
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Onboarding;