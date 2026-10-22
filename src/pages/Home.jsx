import { Link } from 'react-router-dom';
import sorvete from '../assets/sorvetes.jpg';

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-12 sm:py-16">
      <section className="grid items-center gap-8 rounded-2xl bg-pink-100 p-7 sm:grid-cols-2 sm:p-12">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-pink-800">Sorveteria Doce Gelado</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">Seu dia merece um sorvete!</h1>
          <p className="mt-5 leading-7 text-stone-700">Sabores clássicos, muito carinho e aquele gostinho de quero mais. Conheça nosso cardápio e escolha seu favorito.</p>
          <Link to="/produtos" className="mt-7 inline-block rounded-lg bg-pink-700 px-6 py-3 font-bold text-white hover:bg-pink-800">Ver produtos</Link>
        </div>
        <div className="py-5 text-center text-9xl" role="img" aria-label="Casquinha de sorvete">🍦</div>
      </section>
      <section className="mt-10 text-center" aria-labelledby="sobre">
        <img src={sorvete} className='mb-5 w-full h-96 object-cover'></img>
        <h2 id="sobre" className="text-2xl font-bold">Simples assim: sorvete e bons momentos</h2>
        <p className="mx-auto mt-3 max-w-2xl leading-7 text-stone-600">Na Doce Gelado, cada sabor é um convite para fazer uma pausa e aproveitar o dia. Temos opções para quem ama frutas e para quem não abre mão do chocolate.</p>
      </section>
    </div>
  );
}