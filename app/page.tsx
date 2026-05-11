import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { Process } from '@/components/Process';
import { ProjectsGallery, type ProjectCategory } from '@/components/ProjectsGallery';
import { SocialProof } from '@/components/SocialProof';

const projectCategories: ProjectCategory[] = [
  {
    title: 'Cozinhas',
    summary: 'Projetos pensados para fluxo, armazenamento e beleza no uso diario.',
    highlight: 'Planejamento sob medida para ganhar espaco sem abrir mao da elegancia.',
    coverImage:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80',
    images: [
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    title: 'Banheiros',
    summary: 'Marcenaria funcional com materiais e composicoes que valorizam cada detalhe.',
    highlight: 'Solucoes compactas com organizacao, leveza e acabamento refinado.',
    coverImage:
      'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1400&q=80',
    images: [
      'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    title: 'Quartos',
    summary: 'Ambientes acolhedores que equilibram conforto, organizacao e personalidade.',
    highlight: 'Cabeceiras, armarios e paineis pensados para a rotina da casa.',
    coverImage:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1505693537084-aa09a45a9f7b?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    title: 'Salas',
    summary: 'Painel, rack e composicoes sob medida para integrar beleza e convivio.',
    highlight: 'Projetos que organizam o ambiente sem pesar o visual.',
    coverImage:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
    images: [
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    title: 'Closets',
    summary: 'Distribuicao inteligente para manter tudo no lugar com acesso facil.',
    highlight: 'Mais praticidade no dia a dia com um desenho elegante e funcional.',
    coverImage:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1400&q=80',
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    title: 'Escritorios',
    summary: 'Espacos de foco e produtividade com conforto e aproveitamento total.',
    highlight: 'Layout pensado para rotina profissional em casa ou no negocio.',
    coverImage:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80',
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80',
    ],
  },
];

const metrics = [
  { value: 'Desde 2009', label: 'atuando com moveis planejados' },
  { value: 'Atendimento proximo', label: 'do primeiro contato a entrega' },
  { value: 'Projetos sob medida', label: 'para cada ambiente da casa' },
];

const processSteps = [
  {
    index: '01',
    title: 'Entendemos sua rotina',
    description:
      'Comecamos ouvindo como voce usa o espaco, quais dores existem hoje e o que nao pode faltar no projeto.',
  },
  {
    index: '02',
    title: 'Desenhamos a melhor solucao',
    description:
      'Transformamos a ideia em um ambiente planejado com foco em circulacao, armazenamento e acabamento.',
  },
  {
    index: '03',
    title: 'Executamos com acompanhamento',
    description:
      'Voce acompanha cada etapa com clareza, alinhamento de detalhes e atencao ao resultado final.',
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof metrics={metrics} />
        <ProjectsGallery projects={projectCategories} />
        <Process steps={processSteps} />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
