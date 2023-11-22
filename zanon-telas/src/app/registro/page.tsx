import Layout from '../layout';
import styles from './registro.module.css';

export default function Login() {
  return (
    <Layout>
      <main className={styles.main}>
      <form className={styles.coluna}>
        <h2>Registro</h2><br />
        <input className={styles.myInput} type="text" id="nome" placeholder='Nome' />
        <input className={styles.myInput} type="email" id="email" placeholder='Email' />
        <input className={styles.myInput} type="password" id="senha" placeholder='Senha' />
        <a className={styles.myButton} href="/login">Criar</a>
      </form>
      </main>
    </Layout>
  );
}
