import { useContext } from "react"
import { useState } from "react"
import { EventContext } from "../pages"
import styles from "../styles/EventModal.module.css"
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from "react";

export function EventModal({ Cancel }) {

  const { events, setEvents } = useContext(EventContext)
  const [event, setEvent] = useState()

  function onChange(e) {
    const { name, value } = e.target

    setEvent({ ...event, [name]: value })
  }

  function HandleSubmitForm(e) {
    e.preventDefault()

    const date = event.date

    const newEvent = {
      id: uuidv4(),
      title: event.title,
      description: event.description,
      date: date,
      hourStart: event.hourStart,
      hourEnd: event.hourEnd
    }

    setEvents([...events, newEvent]);
    Cancel(false)
  }

  useEffect(() => {
    fetch('https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=a3176a6adc16b3a379c10e923233c2 eb')
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, [])

  return (
    <div className={styles.eventModal}>

      <div className={styles.formContainer}>

        <h1 className={styles.title}>Criar evento</h1>

        <form action="" onSubmit={HandleSubmitForm}>
          <input name="title" type="text" placeholder="Titulo" onChange={onChange} />
          <textarea name="description" placeholder="Descrição" onChange={onChange}></textarea>
          <input name="date" type="date" placeholder="Data" onChange={onChange} />
          <div className={styles.timeContainer}>
            <input className={styles.timeStart} name="hourStart" type="time" placeholder="Hora" onChange={onChange} />
            <input className={styles.timeEnd} name="hourEnd" type="time" placeholder="Hora" onChange={onChange} />
          </div>

          {/* <input type="text" placeholder="Local" /> */}
          <button className={styles.confirmBtn} type="submit">Salvar evento</button>
          <button className={styles.cancelBtn} type="" onClick={() => Cancel(false)}>Cancelar</button>
        </form>
      </div>
    </div>
  )
}