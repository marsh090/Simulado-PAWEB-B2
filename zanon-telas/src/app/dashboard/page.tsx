import Layout from '../layout';
import styles from './dashboard.module.css';

export default function Dashboard() {
  return (
    <Layout>
      <main className={styles.dashboard}>
        <div className={styles.card}>
          <h2 className={styles.title}>Dashboard</h2>
          <div className={styles.widgets}>
            <div className={styles.widget}>Widget 1</div>
            <div className={styles.widget}>Widget 2</div>
            <div className={styles.widget}>Widget 3</div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
