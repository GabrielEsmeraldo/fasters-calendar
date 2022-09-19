import { useContext } from "react"
import { useState } from "react"
import { EventContext } from "../pages"
import styles from "../styles/EventModal.module.css"

export function EventModal({ Cancel }) {

  const { events, setEvents } = useContext(EventContext)
  const [event, setEvent] = useState()
  console.log(events)

  function onChange(e) {
    const { name, value } = e.target

    setEvent({ ...event, [name]: value })
  }

  function HandleSubmitForm(e) {
    e.preventDefault()

    const newEvent = {       
      title: event.title,
      description: event.description
    }

    setEvents([...events, newEvent]);
  }

  return (
    <div className={styles.eventModal}>

      <div className={styles.formContainer}>

        <h1 className={styles.title}>Criar evento</h1>

        <form action="" onSubmit={HandleSubmitForm}>
          <input name="title" type="text" placeholder="Titulo" onChange={onChange} />
          <textarea name="description" placeholder="Descrição" onChange={onChange}></textarea>
          {/* <input type="date" placeholder="Data" />
          <div className={styles.timeContainer}>
            <input className={styles.timeStart} type="time" placeholder="Hora" />
            <input className={styles.timeEnd} type="time" placeholder="Hora" />
          </div>

          <input type="text" placeholder="Local" /> */}
          <button className={styles.confirmBtn} type="submit">Salvar evento</button>
          <button className={styles.cancelBtn} type="" onClick={() => Cancel(false)}>Cancelar</button>
        </form>
      </div>
    </div>
  )
}