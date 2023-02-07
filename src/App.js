import React from 'react'; 
import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Header from './components/Header';
import styled from 'styled-components';
import SideNavBar from './components/SideNavBar';
import Chat from './components/Chat';
import { useAuthState } from "react-firebase-hooks/auth";
import Login from './components/Login';
import { auth } from './firebase';
import Spinner  from 'react-spinkit';
import { BeatLoader } from 'react-spinners';

function App() { 

  const [user, loading] = useAuthState(auth); 

  if ( loading ) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img 
            src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
          />

        <BeatLoader color="#36d7b7" />
        </AppLoadingContents>
      </AppLoading>
    )
  }

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login /> 
          
          ) : (
            <> 
            <Header />


              <AppBody>

                <SideNavBar />
                <Routes>
                  <Route path="/" element={<Chat />} />
                </Routes>
                
              </AppBody>
            </>
          )}
        
      </Router>
      
    </div>
  );
}

export default App;

const AppLoading = styled.div` 
    display: grid;
    height: 100vh;
    place-items: center;
    width: 100%;
`;  

const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`; 

const AppBody = styled.div`
  display: flex; 
  height: 100vh;
`;
