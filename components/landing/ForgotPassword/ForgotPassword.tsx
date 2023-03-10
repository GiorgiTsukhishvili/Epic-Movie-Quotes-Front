import React, { Fragment } from 'react';
import {
  ArrowRight,
  CloseIcon,
  GreenCheck,
  RedCircle,
  useForgotPassword,
} from 'components';
import { ErrorMessage } from '@hookform/error-message';
import { ForgotPasswordProps } from './forgotTypes';
import { emailRegex } from 'config';

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ setWhichForm }) => {
  const { t, handleSubmit, onSubmit, errors, register, email } =
    useForgotPassword();

  return (
    <Fragment>
      <div
        className='h-screen w-screen fixed top-0 left-0 z-[20] backdrop-filter backdrop-blur-main-page'
        onClick={() => setWhichForm('')}
      />
      <div className='md:pt-[3.313rem] pt-[7.438rem] text-center fixed md:w-[37.563rem] md:h-[25.125rem] h-screen w-screen bg-zinc-850 z-30 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] rounded-[0.625rem]'>
        <h1 className='text-white text-2xl md:text-[2rem] font-medium leading-[120%]'>
          {t('form.forgotPassword.header')}
        </h1>
        <h1 className='text-gray-550 mt-3 text-base font-normal leading-9.5 px-[2.125rem] sm:px-[7.5rem]'>
          {t('form.forgotPassword.mainText')}
        </h1>
        <form
          onSubmit={handleSubmit((data) => onSubmit(data, setWhichForm))}
          className='px-[2.125rem] sm:px-[7.5rem] flex flex-col items-start mt-8'
        >
          <div className='w-full flex flex-col items-start relative'>
            <label
              htmlFor='email'
              className='text-base text-white font-normal leading-9.5 mb-2'
            >
              {t('form.login.email')}
            </label>
            <input
              type='text'
              {...register('email', {
                required: {
                  value: true,
                  message: t('form.login.required'),
                },
                validate: {
                  isEmail: (value) => {
                    if (!emailRegex.test(value)) {
                      return t('form.forgotPassword.inputEmail')!;
                    }
                  },
                },
              })}
              className={`${
                errors.email
                  ? 'border-red-550'
                  : email
                  ? 'border-green-750'
                  : 'border-gray-350'
              } focus:shadow-input-custom focus:outline-none w-full border-2 pr-10 rounded-md bg-gray-350 text-gray-550 px-[0.813rem] py-[0.438rem] placeholder-gray-550`}
              placeholder={`${t('form.login.emailInput')}`}
            />
            <div className='text-red-550 h-5 font-normal text-sm leading-9.5 my-1'>
              <ErrorMessage errors={errors} name='email' />
            </div>
            <div className='absolute top-[2.875rem] right-[0.85rem]'>
              {errors.email ? <RedCircle /> : email ? <GreenCheck /> : <></>}
            </div>
          </div>

          <button
            type='submit'
            className='bg-red-650 hover:bg-red-750 text-white text-base  h-[2.375rem]  leading-9.5  w-full rounded '
          >
            {t('form.forgotPassword.sendInstructions')}
          </button>
        </form>
        <div className='flex w-full items-center justify-center mt-8 '>
          <div
            className='flex items-center justify-center  gap-3 cursor-pointer'
            onClick={() => setWhichForm('login')}
          >
            <ArrowRight />
            <h1 className='text-gray-550 text-base font-normal leading-9.5'>
              {t('form.forgotPassword.goBack')}
            </h1>
          </div>
        </div>
      </div>
      <div
        className='fixed top-5 right-5 md:hidden inline z-30 cursor-pointer'
        onClick={() => setWhichForm('')}
      >
        <CloseIcon />
      </div>
    </Fragment>
  );
};

export default ForgotPassword;
