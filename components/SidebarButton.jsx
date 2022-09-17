import Image from "next/image";

import styles from '../styles/SidebarButton.module.css'

export function SidebarButton({title, icon, children}) {
  return (
    <button className={styles.button}>
      <Image
        src={icon}
        alt=""
        width={24}
        height={24}
      />
      {children}
      {title}
    </button>
  )
}