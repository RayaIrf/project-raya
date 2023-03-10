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
    Navigate(`/Home/${data.user.email}`)
  }
  const loginfacebook = async () => {
    const data = await signInWithPopup(auth, new FacebookAuthProvider())
    console.log(data)
    Navigate(`/Home/${data.user.email}`)
  }
  const loginGitHub = async () => {
    const data = await signInWithPopup(auth, new GithubAuthProvider())
    console.log(data)
    Navigate(`/Home/`)
  }
  return (
    <div className='body'>
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
          <ul>
            <marquee behavior="" direction="">Daftar Error :)</marquee>
            <li>- Login GitHub sama twitter masih error</li>
            <li>- error GitHub gak masuk ke home</li>
            <li>- twitter terkendala no saat singup twitter developer</li>
            <li>- Habis login tidak ke halaman home yang ada navbarnya</li>
          </ul>
        </div>
      </div>
    </div>
  )

}

export default App