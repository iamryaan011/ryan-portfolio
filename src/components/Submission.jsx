//styles
import styles from "../styles/sass/Submission.module.scss";

export default function Submission() {
  return (
    <section className={styles.Submission}>
      <article>
        <p>
          Olá, eu sou o <br />
          <a>
            Ryan.
          </a>
          <br />
          <span>Desenvolvedor Front-end!</span>
        </p>
      </article>
    </section>
  );
}
