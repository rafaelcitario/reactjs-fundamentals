import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { Avatar } from "./Avatar";
import { Comentary } from "./Comentary";
import { useState } from "react";
import styles from "../components/Post.module.css";

export const Post = (props) => {
  const [comentaries, setComentaries] = useState([]);

  // Formating date and hours using date-fns
  const publishedDateFormatted = format(
    props.publishedAt,
    "dd 'de' LLL 'às' HH:mm",
    { locale: ptBR }
  );

  // formating the difference of publish time use date-fns to
  const distancePublishedDatetoNow = formatDistanceToNow(
    props.publishedAt.toString(),
    { locale: ptBR, includeSeconds: true }
  )
    .replace("cerca de", "há")
    .concat("  atrás");

  // function handle of submit form comentaries
  function handleComentaries() {
    event.preventDefault();
    return setComentaries([...comentaries, comentaries.length + 1]);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={props.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{props.author.name}</strong>
            <span>{props.author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={props.publishedAt.toISOString()}
        >
          {distancePublishedDatetoNow}
        </time>
      </header>

      <div className={styles.content}>
        {props.content.paragraphs?.map((paragraph) => {
          return <p>{paragraph}</p>;
        })}
        {props.content.links?.map((links) => {
          return <a href="">{links}</a>;
        })}
      </div>

      <footer className={styles.comentaryForm}>
        <form onSubmit={handleComentaries}>
          <strong>Deixe seu feedback</strong>
          <textarea />
          <div className={styles.buttonContainer}>
            <button type="submit">Publicar</button>
          </div>
        </form>
      </footer>

      <div className={styles.commentList}>
        {comentaries.map((comment) => {
          return <Comentary />;
        })}
      </div>
    </article>
  );
};
