import Card from '../components/Card';

const produtos = [
  { id: 1, nome: 'Morango', descricao: 'Leve, cremoso e com gostinho de fruta.', preco: 8, emoji: '🍓', cor: 'bg-pink-100' },
  { id: 2, nome: 'Chocolate', descricao: 'Um clássico para quem ama chocolate.', preco: 9, emoji: '🍫', cor: 'bg-orange-100' },
  { id: 3, nome: 'Baunilha', descricao: 'Sabor delicado para todos os momentos.', preco: 8, emoji: '🍦', cor: 'bg-amber-50' },
  { id: 4, nome: 'Limão', descricao: 'Refrescante, com um toque azedinho.', preco: 8, emoji: '🍋', cor: 'bg-lime-100' },
  { id: 5, nome: 'Coco', descricao: 'Cremosidade e sabor de coco em cada colher.', preco: 9, emoji: '🥥', cor: 'bg-stone-100' },
  { id: 6, nome: 'Uva', descricao: 'Uma opção frutada e cheia de sabor.', preco: 8, emoji: '🍇', cor: 'bg-purple-100' },
];

export default function Produtos() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-12" aria-labelledby="titulo-produtos">
      <h1 id="titulo-produtos" className="text-3xl font-bold">Nossos produtos</h1>
      <p className="mt-3 text-stone-600">Escolha o seu sabor favorito. Preços por bola de sorvete.</p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {produtos.map((produto) => <Card key={produto.id} {...produto} />)}
      </div>
    </section>
  );
}
