import React from 'react'
import styles from './App.module.css'
import Nav from './components/Nav'
import Allroutes from './Routes/Allroutes'
const App = () => {
  return (
    <div className={styles.App}>
      <Nav />
      <Allroutes />
    </div>
  )
}

export default App
