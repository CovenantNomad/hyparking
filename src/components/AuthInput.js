import React from 'react';

const AuthInput = ({ name, type, defaultValue, placeholder, autoFocus, disabled, readonly, register, required, pattern, patternMessage, minLength, errors, top }) => {
  return (
    <div>
      <label htmlFor={name} className="sr-only">{name}</label>
      <input 
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder} 
        autoFocus={autoFocus}
        disabled={disabled}
        readOnly={readonly}
        {...register(name, { 
          required: {
            value: required,
            message: `${name}을 입력해주세요`
          }, 
          pattern: { 
            value: pattern, 
            message: patternMessage 
          },
          minLength: { 
            value: minLength, 
            message: `최소 ${minLength}자 이상 입력해주세요`
          }
        })}
        className={`appearance-none rounded-none ${top ? 'rounded-t-md' : 'rounded-b-md'} relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
      />
    </div>
  );
}

export default AuthInput;