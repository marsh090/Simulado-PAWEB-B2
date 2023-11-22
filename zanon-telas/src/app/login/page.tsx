import Layout from '../layout';
import styles from './login.module.css';

export default function Login() {
  return (
    <Layout>
      <main className={styles.main}>
      <form className={styles.coluna}>
        <h2>Login</h2><br />
        <input className={styles.myInput} type="email" id="email" placeholder='Email' />
        <input className={styles.myInput} type="password" id="senha" placeholder='Senha' />
        <a href="/recover" className={styles.subtitulo}>Esqueci minha senha</a>
        <a className={styles.myButton} href="/dashboard">Entrar</a>
        <a className={styles.subtitulo} href="/registro">Não tem uma conta? Registre-se</a>
      </form>
      </main>
    </Layout>
  );
}
