import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(238,147,51,0.28),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(29,70,160,0.08),transparent_34%)]" />
      <div className="section-shell relative grid gap-14 py-20 md:py-28 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-3 rounded-full border border-[color:var(--border-soft)] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--accent-deep)] shadow-sm">
            Desde 2009 criando ambientes sob medida
          </div>
          <h1 className="mt-8 max-w-3xl font-display text-5xl leading-none text-[color:var(--text-primary)] sm:text-6xl lg:text-7xl">
            Ambientes planejados para viver melhor todos os dias.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--text-secondary)] sm:text-xl">
            A Morada desenvolve moveis planejados com foco em funcionalidade, beleza e aproveitamento
            inteligente dos espacos para cozinhas, quartos, salas, banheiros e muito mais.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="#contato" className="button-primary text-center">
              Solicitar atendimento
            </Link>
            <Link href="#projetos" className="button-secondary text-center">
              Ver projetos
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-[2rem] bg-[linear-gradient(180deg,var(--accent-soft),rgba(238,147,51,0.12))]" />
          <div className="relative overflow-hidden rounded-[2rem] border border-[color:var(--border-soft)] bg-[color:var(--surface)] shadow-[0_40px_100px_rgba(65,44,28,0.16)]">
            <Image
              src="/projects/cozinha-planejada.jpeg"
              alt="Cozinha planejada com acabamento sofisticado"
              width={1400}
              height={1040}
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="h-[420px] w-full object-cover sm:h-[520px]"
            />
            <div className="grid gap-5 border-t border-[color:var(--border-soft)] bg-[color:var(--surface)] p-6 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--text-muted)]">
                  Assinatura
                </p>
                <p className="mt-2 text-lg text-[color:var(--text-primary)]">
                  Design funcional com leitura elegante da casa.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--text-muted)]">
                  Diferencial
                </p>
                <p className="mt-2 text-lg text-[color:var(--text-primary)]">
                  Atendimento proximo e solucao pensada para a rotina real.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
