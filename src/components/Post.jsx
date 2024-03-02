import styles from "../components/Post.module.css";
import { Comentary } from "./Comentary";
export const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://static.glamurama.uol.com.br/2022/06/jon-snow.jpg"
          />
          <div className={styles.authorInfo}>
            <strong>Jhon Snow</strong>
            <span>Comandante da Patrulha da Noite</span>
          </div>
        </div>
        <time dateTime="2024-05-11 08:13:30">Públicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>
          Em meio à escuridão do inverno, mantenham a chama da esperança acesa.
        </p>
        <p>
          Juntos, enfrentaremos qualquer desafio que o destino nos apresente.
        </p>
        <p>
          <a href="">#WinterIsComing #ForTheThrone</a>
        </p>
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
