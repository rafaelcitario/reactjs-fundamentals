import styles from "../components/Post.module.css";
import { Avatar } from "./Avatar";
import { Comentary } from "./Comentary";

// ALTERAR O PÚBLICADO A X HORAS
export const Post = (props) => {
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
        <time title={props.publishedAt} dateTime={props.publishedAt}>
          Públicado há 1h
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
