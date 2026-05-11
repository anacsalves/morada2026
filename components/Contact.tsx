import Link from 'next/link';

export function Contact() {
  return (
    <section id="contato" className="relative overflow-hidden bg-[#163b8f] py-20 text-white md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(238,147,51,0.3),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_22%)]" />
      <div className="section-shell relative">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow text-white/70">Contato</p>
          <h2 className="mt-4 font-display text-5xl leading-none sm:text-6xl">
            Vamos desenhar um ambiente que faca sentido para voce.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
            Se voce quer tirar uma ideia do papel ou repensar um espaco da casa, fale com a Morada e
            receba um atendimento proximo para o seu projeto.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-[2rem] border border-white/12 bg-white/6 p-8 text-center backdrop-blur sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">WhatsApp</p>
          <p className="mt-4 text-3xl font-semibold sm:text-4xl">(35) 99853-2889</p>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/74">
            Chame agora e converse sobre medidas, ambientes desejados e o melhor caminho para o seu projeto.
          </p>
          <Link
            href="https://wa.me/5535998532889"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-extrabold uppercase tracking-[0.18em] text-white shadow-[0_20px_40px_rgba(238,147,51,0.28)] transition hover:-translate-y-1 hover:bg-[color:color-mix(in_srgb,var(--accent)_88%,#9f4f00)]"
          >
            Chamar no WhatsApp
          </Link>
        </div>

        <div className="mx-auto mt-8 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">Instagram</p>
          <p className="mt-4 text-base leading-7 text-white/74">
            Veja referencias, acompanhe o trabalho e entre em contato de forma rapida.
          </p>
          <Link
            href="https://instagram.com/moradaambientesplanejados"
            className="mt-6 inline-flex items-center justify-center rounded-full border border-white/22 bg-white/8 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.18em] text-white transition hover:bg-white/14"
          >
            Ir para o Instagram
          </Link>
        </div>
      </div>
    </section>
  );
}
