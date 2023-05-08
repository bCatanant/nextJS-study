import utilStyles from '../../styles/utils.module.css';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <div className={utilStyles.container}>
      <section className={utilStyles.headingMd}>
        <p>Lais Alves quer namorar comigo ?</p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <button
          className={`${utilStyles.buttom}`}
          onClick={() => router.push('/love-page-2')}
        >
          sim
        </button>
        <button
          className={`${utilStyles.buttomBad}`}
          onClick={() => console.log('nao')}
        >
          nao
        </button>
      </section>
    </div>
  );
}
