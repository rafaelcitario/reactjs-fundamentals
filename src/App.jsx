import { useState } from "react";
import { Post } from "./Post";
import "./global.css";
import { Header } from "./components/Hearder";

export function App() {
  return (
    <div>
      <Header />
      <Post content="Jhon Snow" />
      <Post content="Aria Stark" />
      <Post content="Jamie Lannister" />
    </div>
  );
}
