import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { auth, provider } from '../firebase'
import { loginAction } from '../redux/actions/loginAction'

const Login = () => {

    const dispatch = useDispatch();

    const signIn = () =>{
        auth.signInWithPopup(provider)
            .then(result => {
                dispatch(loginAction(result.user))
                console.log(result);
            })
            .catch(err => alert(err))
    }

  return (
    <div className='login'>
        <div className="login-container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png" alt="whatsapp" />
            <div className="login-text">
                <h1>Sign in to Whatsapp</h1>
            </div>
            <Button onClick={signIn}>Sign in with Google</Button>
        </div>

    </div>
  )
}

export default Login