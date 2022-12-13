import React from "react";
import Head from "next/head";
import styles from "../styles/Todo.module.css";
import { NextSeo } from "next-seo";


function todoList({ items }) {
  return (
    <div
      aria-labelledby="todos-wrapper"
      className={styles.wrapper}
    >
      <NextSeo
        title="todo list"
        description="Todo list for all the task you have to do in a year"
      />
      <Head>
        <title aria-labelledby="todos-title" >
          Todo List
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 aria-labelledby="todos-heading" >
        Todo List
      </h1>
      <div
        role="tree"
        aria-labelledby="todos-content"
       
      >
        {items.map((item) => {
          return (
            <div
              key={item.id}
              role="treeitem"
              aria-labelledby="todos-input"
              className={styles.listitem}
            >
              <input
                type="checkbox"
                role="checkbox"
                readOnly
                id={item.id}
                name={item.title}
                checked={item.completed}
                aria-checked={`${item.completed}`}
              ></input>
              <span className={styles.text}>{item.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default todoList;

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();

  return {
    props: {
      items: data,
    },
  };
}
