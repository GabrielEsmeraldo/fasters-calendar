import styles from '../styles/MainContent.module.css'
import { NextEventCard } from './NextEventCard'
import { Table } from './Table'

export function MainContent() {
  return (
    <>
      <main className={styles.mainContent}>
        <div className={styles.calendarAndNextEventContainer}>
          <div className={styles.nextEvent}>
            <h2>Next Event</h2>
            <NextEventCard />
            <NextEventCard />
          </div>
        </div>
        <span className={styles.divider}></span>
        <div className={styles.tableContainer}>
          <Table />
        </div>
      </main>
      
      
    </>
  )
}