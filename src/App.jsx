import { useState } from "react";
import { Post } from "./Post";

export function App() {
  return (
    <div>
      <Post content="Jhon Snow" />
      <Post content="Aria Stark" />
      <Post content="Jamie Lannister" />
    </div>
  );
}
