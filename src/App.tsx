import { Header } from './components/Header';
import {Footer} from './components/Footer';

import { useState } from 'react'
import reactLogo from './assets/react.svg'


import styles from './App.module.css';

import './global.css';



export function App() {


	return (
    <div className={styles.wrapper} >
      <Header />


      {/* <TaskList />
      */}
     
      <Footer />
    </div>
     
    );
  }
