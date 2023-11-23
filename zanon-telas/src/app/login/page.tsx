import Layout from '../layout';
import styles from './login.module.css';
import FormCard from '../components/formCard';

export default function Login() {
  return (
    <Layout>
      <main className={styles.main}>
      <FormCard
            name="Login"
            numInputs={2}
            inputNames={['Email', 'Senha']}
            inputTypes={['email', 'password']}
            route='/dashboard'
            btName='Entrar'
            />
            <a href="/recover"><p className={styles.subtitulo}>Recuperar senha</p></a>
      </main>
    </Layout>
  );
}
