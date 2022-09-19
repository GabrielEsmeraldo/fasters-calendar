import { useContext } from 'react'
import { EventContext } from '../pages'
import styles from '../styles/MainContent.module.css'
import { NextEventCard } from './NextEventCard'
import { Table } from './Table'

export function MainContent() {

  const { events } = useContext(EventContext)
  console.log(events)

  return (
    <>
      <main className={styles.mainContent}>
        <div className={styles.calendarAndNextEventContainer}>
          <div className={styles.nextEvent}>

            <h2>Next Event</h2>

            {events.map((event) => (
              <NextEventCard key={event.title} title={event.title} />
            )
            )}

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