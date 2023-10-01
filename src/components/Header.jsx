import styles from './Header.module.css'
import igniteLogo from '../assets/ignite-logo.svg'

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Ignite Logo"/>
      <strong >Ignite Feed</strong>
    </header>
  )
}