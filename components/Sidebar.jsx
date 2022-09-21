import styles from '../styles/Sidebar.module.css'
import logo from '../assets/logo.png'
import Image from 'next/image'
import Calendar from '../assets/calendar.svg'
import Message from '../assets/message.svg'
import Diagram from '../assets/diagram.svg'
import ProfileCircle from '../assets/profile-circle.svg'
import People from '../assets/people.svg'
import MenuBoard from '../assets/menu-board.svg'
import Settings from '../assets/settings.svg'
import Logout from '../assets/logout.svg'
import { SidebarButton } from '../components/SidebarButton'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <Image className={styles.logo}
        src={logo}
        alt=""
        width={218}
        height={71}
      />

      <div className={styles.buttonGroup}>

        <SidebarButton title='Agenda' icon={Calendar} />
        <SidebarButton title='Mensagem' icon={Message} />
        <SidebarButton title='Relatórios' icon={Diagram} />

        <h2 className={styles.title}>My Account</h2>

        <SidebarButton title='Meus Eventos' icon={ProfileCircle} />
        <SidebarButton title='Meu Time' icon={People} />
        <SidebarButton title='Minhas Atividades' icon={MenuBoard} />

        <h2 className={styles.title}>System</h2>

        <SidebarButton title='Configurações' icon={Settings} />
        <SidebarButton title='Sair' icon={Logout} />

      </div>

    </aside>
  )
}