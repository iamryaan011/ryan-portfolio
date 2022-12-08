//styles
import styles from "../styles/sass/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <section>
        <article>
          <strong>email</strong>: <span>iamryaan011@gmail.com</span>
          <br />
          <strong>telefone</strong>: <span>(+55) 11 94683-1643</span>
          <br />
          <p>
            Feito por{" "}
            <a
              href="https://www.facebook.com/ryanlimaaaa/"
              target={"_blank"}
              rel={"noreferrer"}
            >
              Ryan Lima
            </a>
          </p>
        </article>

        <section>
          <article>
            <div>
              <a
                href="https://github.com/iamryaan011?tab=repositories"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <img
                  src="https://ymatheusvieira.vercel.app/assets/img/github2.svg"
                  alt="github logo"
                />
              </a>
            </div>

            <div>
              <a
                href="https://www.linkedin.com/in/ryanlima011/"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <img
                  src="https://ymatheusvieira.vercel.app/assets/img/linkedinff2.svg"
                  alt="linkeding logo"
                />
              </a>
            </div>
          </article>
        </section>
      </section>
    </footer>
  );
}
