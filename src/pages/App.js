import React from 'react'
import CreateMessage from '../components/CreateMessage';
import '../styles/App.css'
import Header from './../components/Header';
import Message from './../components/Message';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <CreateMessage />
      <Message />
      <Message />
      <Message />
    </div>
  )
}

export default App
