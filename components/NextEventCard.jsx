import Image from "next/image";
import Clock from "../assets/clock.svg"
import styles from "../styles/NextEventCard.module.css"
import Trash from "../assets/trash.svg"
import { DeleteModal } from "./DeleteModal";
import { useState } from "react";
import { useContext } from "react";
import { EventContext } from "../pages";
import { EditModal } from "./EditModal";
import Edit from '../assets/edit.svg'

export function NextEventCard({ id, title, date, hourStart, hourEnd }) {
  const { events, setEvents } = useContext(EventContext)
  const [deleteModal, setDeleteModal] = useState(false)
  const [editModal, setEditModal] = useState(false)

  function HandleDeleteEvent() {
    setDeleteModal(!deleteModal)
  }

  function HandleEditEvent() {
    setEditModal(!editModal)
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

  function HandleEditEvent() {
    setEditModal(!editModal)
  }

  function getEventData(idEventToEdit) {

  }

  return (
    <div className={styles.nextEventCard}>
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
        <Image
          src={Trash}
          alt=""
          width={24}
          height={24}
        />
      </button>
      <button onClick={HandleEditEvent}>
        <Image
          src={Edit}
          alt=""
          width={24}
          height={24}
        />
      </button>

      {deleteModal && <DeleteModal Cancel={HandleDeleteEvent} Delete={Deletar} />}
      {editModal && <EditModal Cancel={HandleEditEvent} Edit={HandleEditEvent} idEvent={id}/>}
    </div>
  )
}