import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';

const displayFont = Cormorant_Garamond({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const bodyFont = Manrope({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Morada Ambientes Planejados',
  description:
    'Projetos de moveis planejados para cozinhas, quartos, salas, banheiros e ambientes sob medida com atendimento proximo.',
  openGraph: {
    title: 'Morada Ambientes Planejados',
    description:
      'Ambientes planejados com foco em funcionalidade, estetica e aproveitamento inteligente dos espacos.',
    siteName: 'Morada Ambientes Planejados',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
