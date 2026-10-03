'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { href: '#projetos', label: 'Projetos' },
  { href: '#processo', label: 'Como funciona' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[color:var(--brand-navy)] text-white shadow-[0_18px_45px_rgba(14,27,43,0.18)]">
      <div className="section-shell flex h-20 items-center justify-between">
        <Link href="#hero" className="flex items-center gap-4">
          <Image
            src="/logoMovel.jpeg"
            alt="Logo da Morada Ambientes Planejados"
            width={56}
            height={56}
            className="h-14 w-14 rounded-2xl object-cover shadow-[0_18px_50px_rgba(238,147,51,0.28)]"
          />
          <div>
            <p className="font-display text-2xl tracking-[0.24em] text-white md:text-3xl">
              MORADA
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-white/72 md:text-sm">
              Ambientes planejados
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-white/16 bg-white/8 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
            >
              {item.label}
            </Link>
          ))}
          <Link href="#contato" className="button-primary">
            Falar agora
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Abrir menu"
          onClick={() => setIsOpen((current) => !current)}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/16 text-white md:hidden"
        >
          <span className="text-xl">{isOpen ? '×' : '≡'}</span>
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-white/10 bg-[color:var(--brand-navy)] md:hidden">
          <nav className="section-shell flex flex-col gap-4 py-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-white/16 bg-white/8 px-4 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="#contato" className="button-primary w-full text-center" onClick={() => setIsOpen(false)}>
              Falar agora
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
