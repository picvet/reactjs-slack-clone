import React from 'react'
import styled from 'styled-components'
import SmsIcon from '@mui/icons-material/Sms';
import ForumIcon from '@mui/icons-material/Forum';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import SidebarOption from './SidebarOptions'; 
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; 
import { collection } from 'firebase/firestore';
import { db } from '../firebase'; 
import { useCollection } from 'react-firebase-hooks/firestore';


function SideNavBar() {

  const [value, loading, error] = useCollection(
    collection(db, 'rooms'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
    
  return (
    <SideBarContainer className='bg-slow-blue'>
 
      <SidebarOption Icon={SmsIcon} title="Connections" />
      <SidebarOption Icon={ForumIcon} title="DMs" />
      <SidebarOption Icon={AlternateEmailIcon} title="Mentions" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Saved items" />

      <hr />

      {/* channels text */}
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />

      <hr />

      <SidebarOption addChannelOption Icon={AddIcon} title="Add channel" />

      {value && (
          <span> 
            {value?.docs.map((doc) => (
              <SidebarOption key={doc.id} id={doc.id} title={doc.data().name.channelName} />
            ))};
          </span>
        )}

    </SideBarContainer>
  )
}

export default SideNavBar

const SideBarContainer = styled.div`
    flex: .3;

    >hr {
      margin-top: 10px;
      margin-bottom: 10px;
      border: 1px solid #1F4ECA;
    }
`;