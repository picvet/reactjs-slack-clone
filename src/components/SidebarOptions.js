import React from 'react';
import styled from 'styled-components'; 
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore'; 
import { useDispatch } from 'react-redux';
import { enterRoom } from '../features/appSlice';

function SidebarOption( { Icon, title, addChannelOption, id } ) {

    const dispatch = useDispatch();

    const addChannel = () => {
        const channelName = prompt("Enter channel name");

        if ( channelName ) {
            try { 
                addDoc(collection(db, "rooms"), {
                name: {channelName}
                });  
            } catch (e) {
                // console.error("Error adding document: ", e);
            }
        }
    }

    const selectChannel = () => {
        if ( id ) {
            dispatch(enterRoom({
                roomId: {id},
            }));
        }
    } 

  return (
    <SideBarOptionContainer className='hover:bg-[#5653EE] hover: opacity-80 '
        onClick={ addChannelOption ? addChannel : selectChannel}
        >

        
        { Icon && <div className='p-3 text-[10px]'><Icon /></div> }

        {Icon ? (
            <h3 className='font-medium'>{title}</h3>
        ): (
            <SideBarOptionsChannel>
                <span className='p-4'>#</span> {title}
            </SideBarOptionsChannel>
        )}
      
    </SideBarOptionContainer>
  )
}

export default SidebarOption;

const SideBarOptionContainer = styled.div`
    display: flex;
    padding-left: 2px;
    font-size: 12px;
    align-items: center;
    cursor: pointer; 
`;

const SideBarOptionsChannel = styled.h3`
    padding: 10px 0;
    font-weight: 300; 
`;
