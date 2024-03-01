import { useState } from "react";
import { Post } from "./Post";
import styles from "./App.module.css";
import "./global.css";
import { Header } from "./components/Hearder";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Jhon Snow"
            content="Deste modo, acabei de refutar a tese segundo a qual a infinita diversidade da realidade única agrega valor ao estabelecimento das condições epistemológicas e cognitivas exigidas. Mas, à primeira vista, quiçá pareça que o objeto engendrado a priori resultou no abandono de um mundo povoado por objetos intencionais e transcendentes, interiores ao imanente infinito."
          />
          <Post
            author="Aria Stark"
            content="Deste modo, acabei de refutar a tese segundo a qual a infinita diversidade da realidade única agrega valor ao estabelecimento das condições epistemológicas e cognitivas exigidas. Mas, à primeira vista, quiçá pareça que o objeto engendrado a priori resultou no abandono de um mundo povoado por objetos intencionais e transcendentes, interiores ao imanente infinito."
          />
          <Post
            author="Jamie Lannister"
            content="Deste modo, acabei de refutar a tese segundo a qual a infinita diversidade da realidade única agrega valor ao estabelecimento das condições epistemológicas e cognitivas exigidas. Mas, à primeira vista, quiçá pareça que o objeto engendrado a priori resultou no abandono de um mundo povoado por objetos intencionais e transcendentes, interiores ao imanente infinito."
          />
        </main>
      </div>
    </div>
  );
}
