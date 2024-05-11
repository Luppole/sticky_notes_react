import { useState } from 'react';
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostsList from "./components/PostsList"
import MainHeader from "./components/MainHeader"


function App() {
  const [modalIsVisible, setModalIsVisible] = useState(true);

  function showModalHandler() { 
    setModalIsVisible(true);
  }
  function hideModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <MainHeader />
      <main>
          <PostsList isPosting={modalIsVisible} />
      </main>
    </>
  );
}

export default App
