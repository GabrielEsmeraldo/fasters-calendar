import styles from "../styles/DeleteModal.module.css"

export function DeleteModal({ Cancel, Delete }) {
  return (
    <div className={styles.deleteModal}>
      <div className={styles.deleteContainer}>
        <h1 className={styles.title}>Deletar Evento</h1>
        <h2>Você deseja deletar o evento?</h2>
          <button className={styles.confirmBtn} type="submit" onClick={() => Delete()}>Sim, deletar evento</button>
          <button className={styles.cancelBtn} type="" onClick={() => Cancel()}>Cancelar</button>
      </div>
    </div>
  )
}