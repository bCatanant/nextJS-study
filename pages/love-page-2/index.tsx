import utilStyles from '../../styles/utils.module.css';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <div className={utilStyles.containerText}>
      <section className={utilStyles.headingMd}>
        <p>
          Já que fez a escolha certa, pq eu te dei muita a opção do não neh
          ashhsahsad, tala na tela pelo menos.
        </p>
        <p>
          Mas brincadeiras a parte, eu to muito feliz que ter feito isso, é a
          primeira vez que faço algo assim e to muito feliz em ter feito isso
          para te pedir em namoro, e vou fica mais feliz ainda se tu aceitar.
        </p>
        <p>
          Tem certeza que quer namorar comigo, e olha que eu quero passar e
          construir uma vida ao seu lado?
        </p>
      </section>

      <section
        className={`${utilStyles.headingMdPg2} ${utilStyles.padding1px}`}
      >
        <button
          className={`${utilStyles.buttomPg2}`}
          onClick={() => router.push('/love-page-3')}
        >
          sim, eu tenho certeza
        </button>
      </section>
    </div>
  );
}
