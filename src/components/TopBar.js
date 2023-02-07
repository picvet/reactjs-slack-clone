import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import Avatar from '@mui/material/Avatar';
import styled from 'styled-components';
import { auth } from '../firebase';

function TopBar() {

  return (
    <div className='flex bg-slow-blue font-dm_sans max-h-20 overflow-hidden items-center'>
      {/* Header Left */}
      <LeftHeader className='flex ml-[20px] py-5 items-center'>
            <Avatar src={auth.currentUser.photoURL}/>
           <div className='pl-[10px]'>
            <h3>{auth.currentUser.displayName}</h3> 
            <h5>{auth.currentUser.email}</h5>
          </div>
      </LeftHeader>
      

      {/* Header Middle */}

      <MiddleHeader className=''>
        <div className='flex'>
          <h2>Hey Team !</h2>
          <span className='pl-4'>&#128075;</span>
        </div>
        <h4>Welcome to Fresh Start</h4>
      </MiddleHeader>

      {/* Header Right */}
      <RightHeader className='flex flex-auto justify-end mr-[20px]'>
        <SearchBar className='opacity-100 rounded-md bg-dark-blue align-middle flex'>
          <SearchIcon /> 
          <input className='rounded-none outline-none' placeholder='Jump on your channel' />
        </SearchBar> 
        <PowerSettingsNewIcon onClick={() => auth.signOut()} className='hover:opacity-50 hover:cursor-pointer' />
      </RightHeader>


    </div>
  )
}

export default TopBar
const LeftHeader = styled.div`
  flex: .3;
`;

const MiddleHeader = styled.div`
  flex: .4;
`;

const RightHeader = styled.div`
  flex: .3;  
`;

const SearchBar = styled.div`
  padding: 0 50px;
  color: gray;
  border: 1px gray solid;

  >input {
    background: transparent;
    text-align: center;
    color: white;
  }
`;

