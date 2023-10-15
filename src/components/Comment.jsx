import { ThumbsUp, TrashSimple } from "@phosphor-icons/react";
import styles from "./Comment.module.css";
import Avatar from "./Avatar";

export default function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/rfsants001.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Rafael Santos</strong>
              <time
                title="01 de Outubro ás 08:30"
                dateTime="01-10-2023 08:30:00"
              >
                Cerca de 1 hora atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <TrashSimple size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
