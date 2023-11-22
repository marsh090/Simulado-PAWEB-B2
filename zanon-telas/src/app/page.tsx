import styles from './page.module.css';
import Layout from './layout';

export default function Home() {
return (
    <Layout>
    <main className={styles.main}>
        <h1>Bem-vindo às Telas!</h1>
        <div className={styles.cardBranco}>
            <a href="/login"><div className={styles.card}>Logar</div></a>
            <a href="/registro"><div className={styles.card}>Criar conta</div></a>
            <a href="/recover" className={styles.subtitulo}>Esqueci minha senha</a>
        </div>
        <div className={styles.footer}>
            <p>Criado por Lucas Zanon</p>
        </div>
            
    </main>
    </Layout>
);
}
