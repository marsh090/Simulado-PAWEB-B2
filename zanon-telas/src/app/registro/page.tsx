import Layout from '../layout';
import styles from './registro.module.css';
import FormCard from '../components/formCard';

export default function Registro() {
  return (
    <Layout>
      <main className={styles.main}>
      <FormCard
            name="Registrar"
            numInputs={3}
            inputNames={['Nome', 'Email', 'Senha']}
            inputTypes={['text', 'email', 'password']}
            route='/login'
            btName='Registrar'
            />
      </main>
    </Layout>
  );
}
