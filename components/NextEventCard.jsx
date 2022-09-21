import Image from "next/image";
import Clock from "../assets/clock.svg"
import styles from "../styles/NextEventCard.module.css"
import { DeleteModal } from "./DeleteModal";
import { useState } from "react";
import { useContext } from "react";
import { EventContext } from "../pages";
import { useEffect } from "react";

export function NextEventCard({ id, title, date, hourStart, hourEnd }) {
  const { events, setEvents } = useContext(EventContext)
  const [deleteModal, setDeleteModal] = useState(false)

  function HandleDeleteEvent() {
    setDeleteModal(!deleteModal)
  }

  function Deletar() {
    deleteEvent(id)
  }

  function deleteEvent(idToDelete) {
    const eventWithoutDeleteOne = events.filter(event => {
      return event.id !== idToDelete
    })
    setEvents(eventWithoutDeleteOne)
  }

  setTimeout(SayHello, 5000);
    
  function SayHello() {
    const card = document.getElementById('nextEventCard')

    card.classList.remove(`${styles.highlight}`)
    console.log('hello')
  }


  return (
    <div id='nextEventCard' className={`${styles.nextEventCard} ${styles.highlight}`}>
      <h3>{title}</h3>
      <h4>{date}</h4>
      <span>
        <Image
          src={Clock}
          alt=""
          width={24}
          height={24}
        />
        {hourStart} - {hourEnd}
      </span>

      <button onClick={HandleDeleteEvent}>
        Delete
      </button>

      {deleteModal && <DeleteModal Cancel={HandleDeleteEvent} Delete={Deletar} />}
    </div>
  )
}