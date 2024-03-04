import { format, formatDistanceToNow, set } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { Avatar } from "./Avatar";
import { Comentary } from "./Comentary";
import styles from "../components/Post.module.css";
import { useState } from "react";

export const Post = (props) => {
  const [commentaryList, setCommentaryList] = useState([]);
  const [commentaryContent, setCommentaryContent] = useState("");

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

  function handleSubmitFormCommentary(event) {
    event.preventDefault();
    const getContentComentary = event.target.commentArea.value;
    setCommentaryList([getContentComentary, ...commentaryList]);
    setCommentaryContent("");
  }

  function handleChangeComentaryField(event) {
    setCommentaryContent(event.target.value);
  }

  function deleteComment(comment) {
    commentaryList.filter((itemToDelete, index) => {
      if (comment.match(itemToDelete)) {
        commentaryList.splice(index, 1)
        return commentaryList
      }
    })

    setCommentaryList([...commentaryList])
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
          return <p key={paragraph}>{paragraph}</p>;
        })}
        {props.content.links?.map((links) => {
          return <p key={links}><a href="">{links}</a></p>;
        })}
      </div>

      <footer className={styles.comentaryForm}>
        <form onSubmit={handleSubmitFormCommentary}>
          <strong>Deixe seu feedback</strong>
          <textarea
            onChange={handleChangeComentaryField}
            name="commentArea"
            value={commentaryContent}
            maxLength={3000}
            placeholder="O que você pensa sobre isso?"
          />
          <div className={styles.buttonContainer}>
            <button type="submit">Publicar</button>
          </div>
        </form>
      </footer>

      <div className={styles.commentList}>
        {commentaryList.map((content) => {
          return <Comentary key={content} content={content} onDeleteComment={deleteComment} />;
        })}
      </div>
    </article>
  );
};
