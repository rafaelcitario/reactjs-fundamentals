import { Avatar } from "./Avatar";
import styles from "./Comentary.module.css";
import { ThumbsUp, Trash } from "phosphor-react";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

export const Comentary = ({ content }) => {
  const publishedDateFormatted = format(
    new Date().toString(),
    "dd 'de' LLL 'às' HH:mm",
    { locale: ptBR }
  );

  const publishedDistanceToNow = formatDistanceToNow(new Date().toString(), {
    locale: ptBR,
    includeSeconds: true,
  })
    .replace("menos de", "há")
    .replace("cerca de", "há")
    .concat("  atrás");

  return (
    <div className={styles.comment}>
      <Avatar src="https://metro.co.uk/wp-content/uploads/2019/03/SEI_57275281.jpg?quality=90&strip=all&zoom=1&resize=180%2C170" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Cersei Lannister</strong>
              <time
                title={publishedDateFormatted}
                dateTime={new Date().toISOString()}
              >
                {publishedDistanceToNow}
              </time>
            </div>
            <button title="Deletar Comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
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
