import styles from './page.module.css';
import Layout from './layout';
import BigButton from './components/bigButton';

export default function Home() {
return (
    <Layout>
        <main className={styles.main}>
            <div className={styles.header}>
                <h1>Bem-vindo às Telas!</h1>
                <p>Esse site foi criado para a disciplina de Programação Web 2.</p>
            </div>
            <div className={styles.centerBetween}>
                <BigButton name="Login" route="/login" />
                <BigButton name="Registrar" route="/registro" />
            </div>
            <div className={styles.footer}>
                <p>Criado por Lucas Zanon</p>   
            </div>
        </main>
    </Layout>
);
}
