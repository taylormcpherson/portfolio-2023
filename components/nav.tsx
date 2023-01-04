import NextLink from "next/link";
import styles from "../styles/Nav.module.css";

export const NavBar = () => (
  <header className={styles.container}>
    <h2 className={styles.name}>taylor mcpherson</h2>

    <nav aria-label="Primary">
      <ul className={styles.list}>
        <li>
          <NextLink className={styles.link} href="/">work</NextLink>
        </li>
        <li> 
          <NextLink className={styles.link} href="/about/">about</NextLink>
        </li>
        <li> 
          <NextLink
             className={styles.link}
             href="https://drive.google.com/file/d/1AGOSDubE4JUKPQNkMQ9xXoYC78PuUrgI/view?usp=share_link" 
             rel="noreferrer"
             target="_blank"
           >
            resume
        </NextLink>
        </li>
      </ul>
    </nav>
  </header>
);