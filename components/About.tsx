import Image from 'next/image';

export function About() {
  return (
    <section id="sobre" className="section-shell grid gap-10 py-20 md:py-24 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
      <div className="overflow-hidden rounded-[2rem]">
        <Image
          src="/rodrigo.jpeg"
          alt="Rodrigo Avila da Morada Ambientes Planejados"
          width={1080}
          height={1080}
          sizes="(min-width: 1024px) 38vw, 100vw"
          className="h-[420px] w-full object-cover"
        />
      </div>

      <div>
        <p className="eyebrow">Sobre a Morada</p>
        <h2 className="section-title mt-4 text-left">Atendimento proximo, cuidado com detalhe e projeto com sentido.</h2>
        <p className="section-copy mt-6 text-left">
          Rodrigo iniciou sua trajetoria em 2009, trabalhando com moveis planejados e desenvolvendo
          projetos guiados por funcionalidade, estetica e aproveitamento inteligente dos ambientes.
        </p>
        <p className="section-copy mt-5 text-left">
          A Morada nasceu para transformar ideias em espacos personalizados, unindo escuta atenta,
          leitura tecnica do ambiente e solucoes sob medida para cozinhas, quartos, salas, banheiros e
          outros pontos importantes da casa.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-[1.5rem] border border-[color:var(--border-soft)] bg-[color:var(--surface-alt)] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--text-muted)]">
              Foco
            </p>
            <p className="mt-3 text-lg text-[color:var(--text-primary)]">
              Projetos funcionais que valorizam a rotina e o espaco.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-[color:var(--border-soft)] bg-[color:var(--surface-alt)] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--text-muted)]">
              Estilo de trabalho
            </p>
            <p className="mt-3 text-lg text-[color:var(--text-primary)]">
              Processo claro, proximo e alinhado do inicio ao acabamento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
