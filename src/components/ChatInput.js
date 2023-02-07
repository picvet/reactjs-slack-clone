import React from 'react';
import styled from 'styled-components';
import { db } from '../firebase';
import firebase from 'firebase/compat/app';
import { useState } from 'react';
import { collection, addDoc, serverTimestamp  } from 'firebase/firestore'; 
import { auth } from '../firebase';

function ChatInput( {channelName, channelId, chatRef } ) {

    const [userInput, setUserInput] = useState("");
    

    const sendMessage = (e) => {
        e.preventDefault();

        if ( !channelId ) {
            return false;
        }
        
        const messagesRef = collection(db, `rooms/${channelId.id}/messages`);
        const general = addDoc(messagesRef, {
            message: userInput,
            timestamp: serverTimestamp(),
            user: auth.currentUser.displayName,
            userImage: auth.currentUser.photoURL
        }); 

        chatRef.current.scrollIntoView({
            behavior: "smooth"
        });

        setUserInput('');

    };  

  return (
    <ChatInputContainer>
        <form className='relative flex justify-center'>
            <input onChange={e => setUserInput(e.target.value)} value={userInput} placeholder={`Message #${channelName}`} />
            <button 
                type='submit' hidden onClick={sendMessage}>
                    SEND
            </button>
        </form>
    </ChatInputContainer>
  )
}

export default ChatInput;

const ChatInputContainer = styled.div`
    border-radius: 20px;

    >form > input {
        position: fixed;
        bottom: 0px;
        width: 60%;
        border: 1px solid grey;
        border-radius: 3px;
        padding: 20px;
        outline: none;
        color: black;
    }

    > form > button {
        display: none !important;
    }
`;