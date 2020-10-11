import React from 'react'
import '../styles/App.css'
import Header from './../components/Header';
import Messageform from './../components/Messageform';
import Message from './../components/Message';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Messageform />
      <Message />
    </div>
  )
}

export default App
