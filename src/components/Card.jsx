export default function Card({ nome, descricao, preco, emoji, cor }) {
  return (
    <article className="overflow-hidden rounded-xl border border-pink-100 bg-white">
      <div className={`flex h-28 items-center justify-center text-5xl ${cor}`}>
        <span role="img" aria-label={`Sabor ${nome}`}>{emoji}</span>
      </div>
      <div className="p-5">
        <h2 className="text-xl font-bold">{nome}</h2>
        <p className="mt-2 text-sm leading-6 text-stone-600">{descricao}</p>
        <p className="mt-4 font-bold text-pink-700">
          {preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </p>
      </div>
    </article>
  );
}
