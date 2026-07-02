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
    title: 'Cozinha planejada',
    summary: 'Marcenaria sob medida com iluminacao, bancada funcional e aproveitamento completo.',
    highlight: 'Planejamento sob medida para ganhar espaco sem abrir mao da elegancia.',
    coverImage: '/projects/cozinha-planejada.jpeg',
    images: [
      '/projects/cozinha-planejada.jpeg',
      '/projects/painel-tv-iluminado.jpeg',
      '/projects/painel-tv-puffs.jpeg',
    ],
  },
  {
    title: 'Painel iluminado',
    summary: 'Painel de TV com ripado, nichos iluminados e composicao leve para sala.',
    highlight: 'Luz indireta, madeira e marmorizado criando um ponto focal elegante.',
    coverImage: '/projects/painel-tv-iluminado.jpeg',
    images: [
      '/projects/painel-tv-iluminado.jpeg',
      '/projects/painel-tv-puffs.jpeg',
      '/projects/home-office-ripado.jpeg',
    ],
  },
  {
    title: 'Painel com rack',
    summary: 'Composicao para TV com rack suspenso, ripado vertical e acabamento amadeirado.',
    highlight: 'Projetos que organizam a sala sem pesar o visual.',
    coverImage: '/projects/painel-tv-puffs.jpeg',
    images: [
      '/projects/painel-tv-puffs.jpeg',
      '/projects/painel-tv-iluminado.jpeg',
      '/projects/sala-ripada.jpeg',
    ],
  },
  {
    title: 'Sala ripada',
    summary: 'Parede ripada em madeira com movel baixo curvo e presenca marcante.',
    highlight: 'Textura, proporcao e acabamento para valorizar a area social.',
    coverImage: '/projects/sala-ripada.jpeg',
    images: [
      '/projects/sala-ripada.jpeg',
      '/projects/home-office-ripado.jpeg',
      '/projects/painel-tv-puffs.jpeg',
    ],
  },
  {
    title: 'Detalhes em madeira',
    summary: 'Ripado, prateleiras iluminadas e bancada integrando beleza e uso diario.',
    highlight: 'Mais praticidade no dia a dia com um desenho elegante e funcional.',
    coverImage: '/projects/home-office-ripado.jpeg',
    images: [
      '/projects/home-office-ripado.jpeg',
      '/projects/sala-ripada.jpeg',
      '/projects/cozinha-planejada.jpeg',
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
