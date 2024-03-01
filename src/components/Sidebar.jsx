import styles from "./Sidebar.module.css";
import { PencilSimpleLine } from "phosphor-react";
export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1543966888-7c1dc482a810?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://images.unsplash.com/photo-1544278864-46982bacd063?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <strong>Rafael Citario</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <button>
          <a href="#">
            <PencilSimpleLine size={20} weight="bold" />
            Edite seu perfil
          </a>
        </button>
      </footer>
    </aside>
  );
};
