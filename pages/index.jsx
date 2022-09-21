import { Header } from '../components/header'
import { MainContent } from '../components/MainContent'
import { Sidebar } from '../components/Sidebar'
import styles from '../styles/Home.module.css'
import { createContext, useContext } from 'react'
import { useState } from 'react'

export const EventContext = createContext({})

export default function Home() {

  const [events, setEvents] = useState([])

  return (
    <EventContext.Provider value={{ events, setEvents }}>
      <div className={styles.container} >
        <Sidebar />
        <div className={styles.mainContentContainer}>
          <Header />
          <MainContent />
        </div>
      </div>
    </EventContext.Provider>
  )
}
