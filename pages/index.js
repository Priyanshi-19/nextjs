import React from "react";
import Head from "next/head";
import styles from "../styles/Todo.module.css";
import { NextSeo } from "next-seo";
import {Html} from "next/document";


function todoList({ items }) {
  return (
      <div aria-labelledby="todos-wrapper" className={styles.wrapper}>
        <NextSeo
          title="todo list"
          description="Todo list for all the task you have to do in a year"
        />
        <Head>
          <title aria-labelledby="todos-title">Todo List</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <h1 aria-labelledby="todos-heading">Welcome To Your Todo List</h1>
        <div
          role="tree"
          aria-labelledby="todos-content"
          className={styles.list}
        >
          {items.map((item) => {
            return (
              <div
                key={item.id}
                role="treeitem"
                aria-labelledby="todos-input"
                className={styles.listitem}
              >
               
                {item.completed === false ? (
                  <label className={styles.textfalse}>{item.title}</label>
                ) : (
                  <label className={styles.texttrue}>{item.title}</label>
                )}
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
