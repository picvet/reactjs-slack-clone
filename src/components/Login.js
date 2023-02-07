import React from 'react'
import styled from 'styled-components'; 
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';

function Login() { 

    const signIn = (e) => {
        e.preventDefault(); 

        signInWithPopup(auth, provider).catch((error) => alert(error.message));
    }

  return (
    <LoginContainer className=''>
        <LoginInnerContainer>
            <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"/>
            <h1 className=''>Sign in to SLACK CLONE</h1>
            <p>slack.clone.com</p>

            <button
             onClick={signIn}
              type='submit'
              className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'
              >
                Sign in with Google
                </button>
        </LoginInnerContainer>
    </LoginContainer>
  )
}

export default Login;

const LoginContainer = styled.div`
    background-color: #F8F8F8;
    height: 100vh;
    display: grid;
    place-items: center;
    color: black;
`;

const LoginInnerContainer = styled.div`
    padding: 100px;
    text-align: center;
    background-color: white;
    color: black;
    border-radius: 10px;
    box-shadow: 0 1px  3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0 , 0 , 0 , 0.24);

    > p {
        color: black;
    }

    > h1 {
        color: black;
        font-size: larger;
        font-weight: bold;
    }

    > img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }

    > button {
        margin-top: 50px;
        text-transform: inherit !important;
        background-color: #0a8d48;
;
        color: white;
        padding: 3px;
        border-radius: 2px;

        :hover {
            opacity: 0.9;
        }
    }
`;
