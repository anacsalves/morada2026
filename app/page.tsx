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
    coverImage: '/projects/morada/cozinha/IMG-20240804-WA0009.jpg',
    images: [
      '/projects/morada/cozinha/IMG-20240804-WA0009.jpg',
      '/projects/morada/cozinha/IMG-20240804-WA0012.jpg',
      '/projects/morada/cozinha/IMG-20240804-WA0013.jpg',
      '/projects/morada/cozinha/IMG-20240804-WA0017.jpg',
      '/projects/morada/cozinha/IMG-20240804-WA0019.jpg',
      '/projects/morada/cozinha/IMG-20240804-WA0020.jpg',
      '/projects/morada/cozinha/IMG-20240804-WA0028.jpg',
      '/projects/morada/cozinha/IMG-20240804-WA0029.jpg',
      '/projects/morada/cozinha/IMG-20240804-WA0030.jpg',
      '/projects/morada/cozinha/IMG-20240804-WA0031.jpg',
      '/projects/morada/cozinha/IMG-20240804-WA0032.jpg',
      '/projects/morada/cozinha/IMG-20240804-WA0033.jpg',
      '/projects/morada/cozinha/IMG-20240804-WA0034.jpg',
      '/projects/morada/cozinha/IMG-20240804-WA0035.jpg',
      '/projects/morada/cozinha/IMG-20240804-WA0036.jpg',
      '/projects/morada/cozinha/IMG-20240804-WA0037.jpg',
      '/projects/morada/cozinha/IMG-20240804-WA0047.jpg',
      '/projects/morada/cozinha/IMG-20240804-WA0048.jpg',
      '/projects/morada/cozinha/IMG-20240804-WA0049.jpg',
    ],
  },
  {
    title: 'Salas',
    summary: 'Paineis, racks e composicoes sob medida para integrar beleza e convivio.',
    highlight: 'Projetos que organizam a sala sem pesar o visual.',
    coverImage: '/projects/morada/sala/IMG-20240804-WA0008.jpg',
    images: [
      '/projects/morada/sala/IMG-20240804-WA0008.jpg',
      '/projects/morada/sala/IMG-20240804-WA0010.jpg',
      '/projects/morada/sala/IMG-20240804-WA0011.jpg',
      '/projects/morada/sala/IMG-20240804-WA0014.jpg',
      '/projects/morada/sala/IMG-20240804-WA0016.jpg',
      '/projects/morada/sala/IMG-20240804-WA0024.jpg',
      '/projects/morada/sala/IMG-20240804-WA0042.jpg',
    ],
  },
  {
    title: 'Quartos',
    summary: 'Ambientes acolhedores que equilibram conforto, organizacao e personalidade.',
    highlight: 'Cabeceiras, armarios e paineis pensados para a rotina da casa.',
    coverImage: '/projects/morada/quarto/IMG-20240804-WA0015.jpg',
    images: [
      '/projects/morada/quarto/IMG-20240804-WA0015.jpg',
      '/projects/morada/quarto/IMG-20240804-WA0018.jpg',
      '/projects/morada/quarto/IMG-20240804-WA0021.jpg',
      '/projects/morada/quarto/IMG-20240804-WA0022.jpg',
      '/projects/morada/quarto/IMG-20240804-WA0023.jpg',
      '/projects/morada/quarto/IMG-20240804-WA0025.jpg',
      '/projects/morada/quarto/IMG-20240804-WA0026.jpg',
      '/projects/morada/quarto/IMG-20240804-WA0027.jpg',
      '/projects/morada/quarto/IMG-20240804-WA0038.jpg',
      '/projects/morada/quarto/IMG-20240804-WA0039.jpg',
      '/projects/morada/quarto/IMG-20240804-WA0040.jpg',
      '/projects/morada/quarto/IMG-20240804-WA0041.jpg',
      '/projects/morada/quarto/IMG-20240804-WA0043.jpg',
      '/projects/morada/quarto/IMG-20240804-WA0044.jpg',
      '/projects/morada/quarto/IMG-20240804-WA0045.jpg',
      '/projects/morada/quarto/IMG-20240804-WA0046.jpg',
      '/projects/morada/quarto/IMG-20240804-WA0055.jpg',
    ],
  },
  {
    title: 'Banheiros',
    summary: 'Marcenaria funcional com materiais e composicoes que valorizam cada detalhe.',
    highlight: 'Solucoes compactas com organizacao, leveza e acabamento refinado.',
    coverImage: '/projects/morada/banheiro/IMG-20240804-WA0050.jpg',
    images: [
      '/projects/morada/banheiro/IMG-20240804-WA0050.jpg',
      '/projects/morada/banheiro/IMG-20240804-WA0051.jpg',
      '/projects/morada/banheiro/IMG-20240804-WA0052.jpg',
      '/projects/morada/banheiro/IMG-20240804-WA0054.jpg',
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
