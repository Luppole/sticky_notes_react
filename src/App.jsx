import { useState } from 'react';
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostsList from "./components/PostsList"
import MainHeader from "./components/MainHeader"


function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModalHandler() { 
    setModalIsVisible(true);
  }
  function hideModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
          <PostsList 
            isPosting={modalIsVisible} 
            onStopPosting={hideModalHandler} 
          />
      </main>
    </>
  );
}

export default App
