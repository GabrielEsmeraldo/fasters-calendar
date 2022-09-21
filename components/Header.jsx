import styles from '../styles/Header.module.css'
import Notification from '../assets/notification-bing.svg'
import Profile from '../assets/profile.svg'
import Search from '../assets/search-normal.svg'
import Image from 'next/image'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'
import { EventModal } from './EventModal'
import { format } from 'date-fns'

export function Header() {

  const [modal, setModal] = useState(false)

  const date = new Date()
  const month = format(date, "MMMM", {
    locale: ptBR
  })

  const dateFormatted = format(date, "EEEE' • 'd' de 'MMMM' • 'y'", {
    locale: ptBR
  })

  return (
    <header className={styles.header}>
      <div className={styles.dateNow}>
        <strong>{month}</strong>
        <p>{dateFormatted}</p>
      </div>
      <div className={styles.eventContainer}>
        <button className={styles.createEvent} onClick={() => setModal(true)}>+ Create event</button>
        <div className={styles.search}>
          <div className={styles.searchIcon}>
            <Image
              src={Search}
              alt=""
              width={24}
              height={24}
            />
          </div>
          <input type="text" placeholder='Search task, event, calendar ' />
        </div>
        <button className={styles.notification}>
          <Image
            src={Notification}
            alt=""
            width={24}
            height={24}
          />
        </button>
        <button className={styles.profile}>
          <Image
            src={Profile}
            alt=""
            width={24}
            height={24}
          />
        </button>
      </div>
      {modal && <EventModal Cancel={setModal} />}
    </header>
  )
}