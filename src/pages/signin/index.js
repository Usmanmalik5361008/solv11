import { COMPANY_LOGO, EMAIL_ICON, EYE_CROSSED } from 'assets'
import { InputField } from 'globalComponents'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './index.scss'
import { LANDING_PAGE_MEETING } from 'assets'

const SigninPage = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/')
  }

  return (
    <div className='page-container sigin-page-container'>
      <div className={'sign-in-landing'}>
      <img src={LANDING_PAGE_MEETING} alt={'meeting'} className={'sign-in-landing-image'} />
      </div>
      <div className='sigin-form-container'>
        <img src={COMPANY_LOGO} alt='' className='sigin-logo' />

        <div className='greetings'>
          <p>Welcome Back</p>
          <h1>Login to your account</h1>
        </div>
        <div>
          <form>
            <div className='form-field'>
              <label>Email</label>
              <InputField name='email' prependIcon={EMAIL_ICON} />
            </div>
            <div className='form-field'>
              <label>Password</label>
              <InputField name='password' prependIcon={EYE_CROSSED} />
            </div>
            <select className='dropdown-style-1'>
              <option>Production</option>
              <option>Developement</option>
            </select>

            <button className='btn-gradient' onClick={handleLogin}>
              Get Started
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SigninPage
