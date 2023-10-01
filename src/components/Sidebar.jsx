import { PencilSimpleLine } from '@phosphor-icons/react';

import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80" />
      <div className={styles.profile}>
        <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/53949076?v=4" />
        <strong>Nome do Usuário</strong>
        <span>Ux Designer</span>
      </div>

      <footer>
        <a href="#">
          <PencilSimpleLine  size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
