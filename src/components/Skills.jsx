//styles
import styles from "../styles/sass/Skills.module.scss";

//image
import Image from "next/image";

export default function Skills() {
  return (
    <section className={styles.Skills} id="skills">
      <h1>Habilidades</h1>

      <section>
        <p> Clique na imagem para ser redirecionado a sua documentação </p>

        <article>
          <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">
            <img
              src="https://ymatheusvieira.vercel.app/assets/img/html2.svg"
              alt="html logo"
            />
          </a>

          <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS">
            <img
              src="https://ymatheusvieira.vercel.app/assets/img/css2.svg"
              alt="css logo"
            />
          </a>

          <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Introduction">
            <img
              src="https://ymatheusvieira.vercel.app/assets/img/js2.svg"
              alt="javascript logo"
            />
          </a>

          <a href="https://pt-br.reactjs.org/docs/getting-started.html">
            <img
              src="https://ymatheusvieira.vercel.app/assets/img/react2.svg"
              alt="react logo"
            />
          </a>

          <a href="https://styled-components.com/docs">
            <img
              src="https://ymatheusvieira.vercel.app/assets/img/styled 2.svg"
              alt="styled components logo"
            />
          </a>

          <a href="https://sass-lang.com/documentation/">
            <img
              src="https://ymatheusvieira.vercel.app/assets/img/sass2.svg"
              alt="sass logo"
            />
          </a>
        </article>

        <article>
          <p>
            Além dessas tecnologias, tenho conhecimento em Next.js, TypeScript,
            jQuery, Ajax, Bootstrap, PHP e MySql.
          </p>
        </article>
      </section>
    </section>
  );
}
