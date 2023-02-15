import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'; 
import { selectRoomId } from '../features/appSlice';
import ChatInput from './ChatInput'; 
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { collection , doc, orderBy, query } from 'firebase/firestore';
import { auth, db } from '../firebase';
import Message from './Message';
import { useRef, useEffect, useState } from 'react';



function Chat() {   

    let makeMess;

    const chatRef = useRef(null); 
    
    const roomId = useSelector(selectRoomId);   

    const [roomDetails, setRoomDetails] = useDocument(
        roomId && doc(db, `rooms/${roomId.id}`)
      );
 
    
    const [roomMessages, loading, ] = useCollection(  
        query(roomId && collection(db, `rooms/${roomId.id}/messages`)) 
    );  

    useEffect(() => {
        chatRef?.current?.scrollIntoView(
            {behavior: "smooth"}
        );  
    }, [roomId, loading, roomMessages]);

    

  return (
    
    <ChatContainer className='bg-dark-blue'>

        {roomDetails && roomMessages && (
            <>
            <Header>
                <HeaderLeft className='flex align-middle'>
                    <h4><strong>#{roomDetails?.data().name.channelName}</strong></h4>
                    <span className='pl-[10px]'>&#127775;</span>
                </HeaderLeft>

                <HeaderRight >
                    <span >&#8505;&#65039; </span>
                    <h4 className='ml-[10px]'>Details</h4>
                </HeaderRight>
            </Header>

            <ChatMessages className='flex-auto justify-start'>

            { roomMessages?.docs.map(doc => { 
                    const { message, timestamp, user, userImage } = doc.data();

                     
                    return (
                        <Message 
                            message={message} 
                            key={doc.id} 
                            timestamp={timestamp} 
                            user={user} 
                            userImage = {userImage}
                        />
                    );
            })} 

            <ChatBottom ref={chatRef} />
            </ChatMessages>

            <ChatInput 
                chatRef={chatRef} 
                channelName={roomDetails?.data().name.channelName}
                channelId= { roomId }
            />
        </>
        )} 
        
    </ChatContainer>
  )
}

export default Chat;

const ChatBottom = styled.div`
    padding-bottom: 150px;
    `;

const ChatMessages = styled.div``;

const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll; 
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
`;

const HeaderLeft = styled.div`
    >h4 {
        text-transform: lowercase;
    }
`;

const HeaderRight = styled.div`
    display: flex;
    align-items: center;
`;