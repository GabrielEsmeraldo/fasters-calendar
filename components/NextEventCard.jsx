import Image from "next/image";
import Clock from "../assets/clock.svg"
import styles from "../styles/NextEventCard.module.css"

export function NextEventCard({ title }) {
  return (
    <div className={styles.nextEventCard}>
      <h3>{title}</h3>
      <h4>January 4, 2022</h4>
      <span>
        <Image
          src={Clock}
          alt=""
          width={24}
          height={24}
        />
        08:00 - 09:30 AM</span>
    </div>
  )
}