import { Post } from "./components/Post";
import { Header } from "./components/Hearder";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

// author: avatar, name, role
// content: paragraphs, links
// publishedAt: Date

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://static.glamurama.uol.com.br/2022/06/jon-snow.jpg",
      name: "Jonn Snow",
      role: "Comandante da Guarda da Noite",
    },
    content: {
      paragraphs: [
        "Em meio à escuridão do inverno, mantenham a chama da esperança acesa.",
        "Juntos, enfrentaremos qualquer desafio que o destino nos apresente.",
      ],
      links: ["#WinterIsComing #ForTheThrone"],
    },
    publishedAt: new Date("02-03-2024 12:40:30"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://static.glamurama.uol.com.br/2022/06/jon-snow.jpg",
      name: "Jonn Snow",
      role: "Comandante da Guarda da Noite",
    },
    content: {
      paragraphs: [
        "Em meio à escuridão do inverno, mantenham a chama da esperança acesa.",
        "Juntos, enfrentaremos qualquer desafio que o destino nos apresente.",
      ],
      links: ["#WinterIsComing #ForTheThrone"],
    },
    publishedAt: new Date("02-03-2024 12:40:30"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
