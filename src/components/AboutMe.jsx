//styles
import styles from "../styles/sass/AboutMe.module.scss";

export default function AboutMe() {
  return (
    <section className={styles.Container} id="about-me">
      <article>
        <h1>Sobre Mim</h1>
      </article>

      <div>
        <p>
          Meu nome é{" "}
          <a href="https://www.instagram.com/iamryaan011/" target={"blank"}>
            Ryan Lima
          </a>{" "}
          e eu sou apaixonado no mundo da tecnologia. Há um tempo atrás, eu
          tomei a iniciativa de começar a estudar programação e decidi que a
          minha vida seria isso. Isso é o que eu gosto e é o que eu quero pra
          minha vida.
        </p>

        <br />

        <p>
          Hoje em dia tenho conhecimento em diversas tecnologias e frameworks como o JavaScript, ReactJS,
          Next.js etc.
        </p>
      </div>
    </section>
  );
}
