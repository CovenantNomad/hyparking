import React, { useEffect, useRef, useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { authAtom, navigationAtom } from '../stores/state';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../configs/firebaseConfig';

const Navbar = () => {
  const [ open, setOpen ] = useState(false)
  const [ profileOpen, setProfileOpen ] = useState(false)
  const [ navigation, setNavigation ] = useRecoilState(navigationAtom)
  const setAuthState = useSetRecoilState(authAtom)
  const location = useLocation()
  const profileRef = useRef(null)
  const navigate = useNavigate()


  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const onClickHandler = (e) => {
    setNavigation(
      navigation.map(item => item.name === e.target.text ? {...item, current: true} : {...item, current: false})
    )
  }

  const logout = () => {
    signOut(auth).then(() => {
      localStorage.removeItem("auth")
      setAuthState({
        isLoggedIn: false,
        token: null
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  const handleClickOutside = (e) => {
    if (profileOpen && !profileRef.current.contains(e.target)) {
      setProfileOpen(false)
    }
  }

  useEffect(() => {
    setNavigation(
      navigation.map(item => item.path === location.pathname ? {...item, current: true} : {...item, current: false})
    )
  }, [])

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [profileOpen])

  return (
    <>
      <nav className='h-16 relative flex items-center justify-between'>
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          {/* #1 Mobile menu button*/}
          <button 
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span className="sr-only">Open main menu</span>
            {open ? (
              <XIcon className="block h-8 w-8" aria-hidden="true" />
            ) : (
              <MenuIcon className="block h-8 w-8" aria-hidden="true" />
            )}
          </button>
        </div>
        {/* #1.2 Desktop menu */}
        <div className='hidden sm:block'>
          <div className='flex space-x-4'>
            {navigation.map((item)=> (
              <Link
                key={item.name}
                to={item.path}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'px-3 py-2 rounded-md text-sm font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
                onClick={onClickHandler}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        {/* #2 Profile menu button*/}
        <div className="absolute inset-y-0 right-0 flex items-center" ref={profileRef}>
          <div className='relative'>
            <button 
              
              onClick={() => setProfileOpen(!profileOpen)}
              className='bg-gray-700 flex rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-400'
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="h-8 w-8 rounded-full"
                src={require('../assets/img/logo.jpg')}
                alt="profileImage"
              />
            </button>
          </div>
        </div>
        {profileOpen && (
          <div className='origin-top-right absolute right-0 top-12 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <button
              onClick={() => navigate("/setting")}
              className="active:bg-gray-100 hover:bg-gray-100 block w-full text-left px-4 py-2 text-sm text-gray-700"
            >
              설정
            </button> 
            <button
              onClick={logout}
              className="active:bg-gray-100 hover:bg-gray-100 block w-full text-left px-4 py-2 text-sm text-gray-700"
            >
              로그아웃
            </button>      
          </div>
        )}
      </nav>
      {/* #1.1 Mobile menu */}
      {open && (
        <div className='mt-4 sm:hidden'>
          <div className='flex flex-col space-y-1'>
            {navigation.map((item)=> (
              <Link
                key={item.name}
                to={item.path}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block px-3 py-2 rounded-md text-base font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
                onClick={onClickHandler}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;