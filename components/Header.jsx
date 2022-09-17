import styles from '../styles/Header.module.css'
import Notification from '../assets/notification-bing.svg'
import Profile from '../assets/profile.svg'
import Search from '../assets/search-normal.svg'
import Image from 'next/image'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.dateNow}>
        <strong>Janeiro</strong>
        <span>Quinta-Feira - 4 de Jan - 2022</span>
      </div>

      <div className={styles.eventContainer}>
        <button className={styles.createEvent}>+ Create event</button>

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
    </header>
  )
}