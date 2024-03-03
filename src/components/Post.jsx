import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { Avatar } from "./Avatar";
import { Comentary } from "./Comentary";
import styles from "../components/Post.module.css";

// ALTERAR O PÚBLICADO A X HORAS
export const Post = (props) => {
  const publishedDateFormatted = format(
    props.publishedAt,
    "dd 'de' LLL 'às' HH:mm",
    { locale: ptBR }
  );
  const distancePublishedDatetoNow = formatDistanceToNow(
    props.publishedAt.toString(),
    { locale: ptBR, includeSeconds: true }
  )
    .replace("cerca de", "há")
    .concat("  atrás");

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
        <time title={publishedDateFormatted} dateTime={props.publishedAt}>
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
        <form>
          <strong>Deixe seu feedback</strong>
          <textarea />
          <div className={styles.buttonContainer}>
            <button type="submit">Publicar</button>
          </div>
        </form>
      </footer>

      <div className={styles.commentList}>
        <Comentary />
        <Comentary />
        <Comentary />
      </div>
    </article>
  );
};
