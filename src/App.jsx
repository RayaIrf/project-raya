import { useState } from 'react'
import gitLogo from './assets/img/GitHub.png'
import twitterLogo from './assets/img/twitter.png'
import facebookLogo from './assets/img/facebook.png'
import googleLogo from './assets/img/google.png'
import './App.css'
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { async } from '@firebase/util'
import { auth } from './config'
import { Await, Navigate, useNavigate } from 'react-router-dom'

function App() {
  const Navigate = useNavigate()
  const logingoogle = async () => {
    const data = await signInWithPopup(auth, new GoogleAuthProvider())
    console.log(data)
    Navigate(`/assets/components/Home${data.user.email}`)
  }
  const loginfacebook = async () => {
    const data = await signInWithPopup(auth, new FacebookAuthProvider())
    console.log(data)
    Navigate(`/assets/components/Home`)
  }
  const loginGitHub = async () => {
    const data = await signInWithPopup(auth, new GithubAuthProvider())
    console.log(data)
    Navigate(`/assets/components/Home`)
  }
  return (
    <div className='container'>
      <div className='login-left'>
        <div className="login-header">
          <h1>Welcome To My Application</h1>
          <p>Please Login To Use The Platfrom</p>
        </div>
        <form className='login-form'>
          <div className="login-form-footer">
            <a onClick={loginfacebook}>
              <img width="30" src={facebookLogo} alt="" />Facebook Login
            </a>
            <a onClick={logingoogle}>
              <img width="30" src={googleLogo} alt="" />Google Login
            </a>
          </div>

          <div className='login-form-footer'>
            <a onClick={loginGitHub}>
              <img width="30" src={gitLogo} alt="" />GitHub Login
            </a>
            <a href="/">
              <img width="30" src={twitterLogo} alt="" />Twitter Login
            </a></div>
        </form>
      </div>
      <div className='login-right'>
        <marquee behavior="" direction="">Login GitHub sama twitter masih error</marquee>
        <p>- error GitHub gak masuk ke home</p>
        <p>- twitter terkendala no saat singup twitter developer</p>
      </div>
    </div>
  )

}

export default App