import styles from '../styles/MainContent.module.css'
import { NextEventCard } from './NextEventCard'

export function MainContent(){
  return (
    <main className={styles.mainContent}>
      <div className={styles.calendarAndNextEventContainer}>
        <div className={styles.calendar}>

        </div>
        <div className={styles.nextEvent}>
          <h2>Next Event</h2>

          <NextEventCard/>
          <NextEventCard/>
        </div>
      </div>
      <div className={styles.tableContainer}>
        <h1>Tabela</h1>
      </div>
    </main>
  )
}