type Metric = {
  value: string;
  label: string;
};

type SocialProofProps = {
  metrics: Metric[];
};

export function SocialProof({ metrics }: SocialProofProps) {
  return (
    <section className="border-y border-[color:var(--border-soft)] bg-[color:var(--surface-alt)]">
      <div className="section-shell grid gap-6 py-8 md:grid-cols-3">
        {metrics.map((metric) => (
          <div key={metric.value} className="rounded-[1.75rem] border border-[color:var(--border-soft)] bg-[color:var(--surface)] px-6 py-6">
            <p className="font-display text-3xl text-[color:var(--text-primary)]">{metric.value}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.16em] text-[color:var(--text-secondary)]">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
