//styles
import styles from "../styles/sass/Introduction.module.scss";

//components
import Header from './Header'
import Submission from './Submission'
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Footer from "./Footer";

export default function Introduction() {
  return (
    <div className={styles.Introduction}>
      <Header />

      <Submission />

      <AboutMe />

      <Skills />

      <Footer />
    </div>
  );
}
