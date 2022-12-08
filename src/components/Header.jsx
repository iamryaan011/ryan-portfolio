//styles
import styles from "../styles/sass/Header.module.scss";

//hooks
import { useEffect, useState } from "react";

export default function Header() {
  //hooks and menu
  const [openMenu, setOpenMenu] = useState("none");

  //functions
  const handleMenu = () => {
    if (openMenu === "none") {
      setOpenMenu("block");
    } else {
      setOpenMenu("none");
    }
  };

  return (
    <header
      className={styles.Header}
      id="start"
      style={
        openMenu === "block"
          ? { display: "flex", justifyContent: "space-between" }
          : {}
      }
    >
      <section>
        <h1>Portfólio</h1>
      </section>

      <section>
        <div onClick={handleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <nav style={{ display: openMenu }}>
          <ul>
            <li>
              <a href="#start">Início</a>
            </li>
            <li>
              <a href="#about-me">Sobre mim</a>
            </li>
            <li>
              <a href="#skills">Habilidades</a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}
