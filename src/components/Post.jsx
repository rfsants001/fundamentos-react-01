import styles from "./Post.module.css";

export default function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/rfsants001.png"
          />
          <div className={styles.authorInfo}>
            <strong>Rafa Devx</strong>
            <span>Web Developer</span>
          </div>

        </div>
          <time title="01 de Outubro ás 08:30" dateTime="01-10-2023 08:30:00">
            Publicado há 1 hora
          </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a>
          <a href="#">#nlw</a>
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe sua opnião</strong>

        <textarea placeholder="Deixe um comentário" />

        <button type="submit">Comentar</button>
      </form>
    </article>
  );
}
