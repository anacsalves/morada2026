type Step = {
  index: string;
  title: string;
  description: string;
};

type ProcessProps = {
  steps: Step[];
};

export function Process({ steps }: ProcessProps) {
  return (
    <section id="processo" className="bg-[color:var(--surface-alt)] py-20 md:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Como funciona</p>
          <h2 className="section-title mt-4">Tres etapas para transformar a ideia em ambiente pronto.</h2>
          <p className="section-copy mt-5">
            O processo da Morada busca clareza desde o primeiro contato para que o projeto avance com
            seguranca, alinhamento e boa execucao.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.index}
              className="rounded-[1.9rem] border border-[color:var(--border-soft)] bg-[color:var(--surface)] p-8"
            >
              <p className="font-display text-5xl text-[color:var(--accent)]">{step.index}</p>
              <h3 className="mt-8 text-2xl font-semibold text-[color:var(--text-primary)]">{step.title}</h3>
              <p className="mt-4 text-base leading-7 text-[color:var(--text-secondary)]">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
