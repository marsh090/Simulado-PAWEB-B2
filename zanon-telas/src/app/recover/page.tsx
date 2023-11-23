import Layout from '../layout';
import styles from './recover.module.css';
import FormCard from '../components/formCard';

export default function Recover() {
  return (
    <Layout>
      <main className={styles.main}>
        <FormCard
              name="Recuperar Conta"
              numInputs={1}
              inputNames={['Email']}
              inputTypes={['email']}
              route='/login'
              btName='Verificar Email'
              />
      </main>
    </Layout>
  );
}