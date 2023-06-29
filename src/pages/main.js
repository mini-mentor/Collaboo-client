import styles from '../styles/Main.module.css'
import Header from "../components/header";
import Project from "../components/project";
import plus from '../assets/plus.png';

const Main = () => {
  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.tab_container}>
        <div className={styles.tabs}>
          <div className={styles.tab}>진행 중인 프로젝트</div>
          <div className={styles.disable_tab}>완료한 프로젝트</div>
        </div>
        <div className={styles.content}>
          <Project/>
        </div>
      </div>
      <div className={styles.plus_btn}>
        <img src={plus}/>
      </div>
    </div>
  );
}

export default Main;