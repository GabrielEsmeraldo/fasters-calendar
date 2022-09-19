import styles from "../styles/EventModal.module.css"

export function EventModal({ Cancel }) {

  console.log(Cancel)

  function HandleSubmitForm() {
    event.preventDefault()
  }

  return (
    <div className={styles.eventModal}>

      <div className={styles.formContainer}>

        <h1 className={styles.title}>Criar evento</h1>

        <form action="" onSubmit={HandleSubmitForm}>
          <input type="text" placeholder="Titulo" />
          <textarea placeholder="Descrição"></textarea>
          <input type="date" placeholder="Data" />
          <div className={styles.timeContainer}>
            <input className={styles.timeStart} type="time" placeholder="Hora" />
            <input className={styles.timeEnd} type="time" placeholder="Hora" />
          </div>

          <input type="text" placeholder="Local" />
          <button className={styles.confirmBtn} type="submit">Salvar evento</button>
          <button className={styles.cancelBtn} type="" onClick={() => Cancel(false)}>Cancelar</button>
        </form>

      </div>
    </div>
  )
}