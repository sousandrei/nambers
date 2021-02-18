import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>nambers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>nambers</h1>
        <h2>conversions made easy!</h2>

        <Grid />
      </main>

      <footer className={styles.footer}>
        Made with <Love /> by <Andrei />
      </footer>
    </div>
  );
}

const Love = () => (
  <span role="img" aria-label="love">
    ❤️
  </span>
);

const Andrei = () => (
  <a
    href="https://github.com/sousandrei"
    target="_blank"
    rel="noopener noreferrer"
  >
    Andrei Sousa
  </a>
);

const CARDS = [
  { text: "Decimal", base: 10 },
  { text: "Hex", base: 16 },
  { text: "Binary", base: 2 },
  { text: "Octal", base: 8 },
];

const Grid = () => {
  const [value, setValue] = useState(0);
  const cards = CARDS.map((props) => (
    <Card {...props} value={value} setValue={setValue} />
  ));

  return <div className={styles.grid}>{cards}</div>;
};

const Card = ({ text, base, value, setValue }) => {
  function handleChange(change) {
    console.log("handle", { change });

    if (!change.length) {
      return setValue(0);
    }

    let newValue = parseInt(change, base);
    if (Number.isNaN(newValue)) {
      return;
    }

    setValue(newValue);
  }

  return (
    <div className={styles.card}>
      <h3>{text}</h3>
      <input
        type={text}
        value={Number(value).toString(base)}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
