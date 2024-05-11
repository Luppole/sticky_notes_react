import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from "./components/Post"

function App() {
  return (
    <main>
      <Post author="Itamar" body="Learning ReactJS" />
      <Post author="Yaniv" body="The Course Isn't Boring"/>
    </main>
  );
}

export default App
