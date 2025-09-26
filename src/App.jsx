import './components/todo/todo.css';
import TodoNew from './components/todo/TodoNew'
import TodoData from './components/todo/TodoData'
import reactLogo from './assets/react.svg'
import { useState } from 'react';
import Header from './layout/header';
import Footer from './layout/footer';
import { Outlet } from 'react-router-dom';


const App = () => {





  return (
    <>

      <Header />
      <Outlet />
      <Footer />
    </>
  )
}



export default App
