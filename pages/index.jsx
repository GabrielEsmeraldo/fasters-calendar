import { Header } from '../components/header'
import { MainContent } from '../components/MainContent'
import { Sidebar } from '../components/Sidebar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container} >
      <Sidebar />
      <div className={styles.mainContentContainer}>
        <Header />
        <MainContent />
      </div>
    </div>
  )
}
