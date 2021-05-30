import { useState } from 'react';
import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import FilesView from './components/filesView/FilesView';
import SideIcons from './components/sideIcons'
import GDrive from './media/Google_Drive-Logo.wine.png'
import { auth, provider } from "./firebase";


function App() {
//authentication
const [user, setUser] = useState()

const handleLogin = () => {
  if (!user) {
    auth.signInWithPopup(provider).then((result) => {
      setUser(result.user)
      console.log(result.user)
    }).catch((error) => {
      alert(error.message);
    });
  } else if (user) {
    auth.signOut().then(() => {
      setUser(null)
    }).catch((err) => alert(err.message))
  }
}

  return (
    <div className="app">
    {
      user ? (
        <>
          <Header userPhoto={user.photoURL} />
          <div className="app__main">
            <Sidebar />
            <FilesView />
            <SideIcons />
          </div>
        </>
      ) : (
          <div className='app__login'>
            <img src={GDrive} alt="Google Drive" />
            <button onClick={handleLogin}>Log in to Google Drive</button>
            <h5>Sparsh Google Drive</h5>
            </div>
        )
    }
  </div>
  );
}

export default App;
