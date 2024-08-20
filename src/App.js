import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Button } from '@mui/material';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';


import VideoCall from './components/VideoCall';
import BroadcastVid from './components/BroadcastVid';

function App() {
  const [mode,setMode] = useState(null);
   const responseMessage = (response) => 
   async (dispatch) => {
        console.log(response);

    };
    const errorMessage = (error) => {
        console.log(error);
    };
  return (
    <GoogleOAuthProvider clientId="client-id">
    <div className="App app-container">
      {!mode && <Button onClick={() => setMode('single')}>Single User</Button>}
      {!mode && <Button onClick={() => setMode('broadcast')}> Broadcast</Button>}
      { mode === 'single' && <VideoCall />}
      { mode === 'broadcast' && <BroadcastVid />}
      <GoogleLogin 
      onSuccess={responseMessage} 
      onError={errorMessage} 
      useOneTap
      />

    </div>
     </GoogleOAuthProvider>
  );
}

export default App;
