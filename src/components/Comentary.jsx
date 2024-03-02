import { Avatar } from "./Avatar";
import styles from "./Comentary.module.css";
import { ThumbsUp, Trash } from "phosphor-react";
export const Comentary = () => {
  return (
    <div className={styles.comment}>
      <Avatar src="https://metro.co.uk/wp-content/uploads/2019/03/SEI_57275281.jpg?quality=90&strip=all&zoom=1&resize=180%2C170" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Cersei Lannister</strong>
              <span>Rainha dos Sete Reinos</span>
              <time dateTime="2024-05-11 08:13:30">Cerca de 1h atráz</time>
            </div>
            <button title="Deletar Comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>Ah, Jon Snow, o bastardo do Norte. Tão nobre, tão tolo.</p>
          <p>
            Enquanto você se preocupa com Caminhantes Brancos, eu estou ocupada
            governando os Sete Reinos. Lembre-se, o inverno pode estar chegando,
            mas o leão sempre prevalece.
          </p>
          <p>
            <a href="">#Lannister #GameofThrones</a>
          </p>
        </div>

        <footer>
          <button title="Curtir comentário">
            <ThumbsUp weight="bold" />
            Aplaudir
            <span className={styles.likeNumber}>0</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
