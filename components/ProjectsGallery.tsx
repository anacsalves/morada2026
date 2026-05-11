'use client';

import Image from 'next/image';
import { useState } from 'react';

export type ProjectCategory = {
  title: string;
  summary: string;
  highlight: string;
  coverImage: string;
  images: string[];
};

type ProjectsGalleryProps = {
  projects: ProjectCategory[];
};

export function ProjectsGallery({ projects }: ProjectsGalleryProps) {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const activeProject = projects[activeProjectIndex];

  function selectProject(index: number) {
    setActiveProjectIndex(index);
    setActiveImageIndex(0);
  }

  function showPreviousImage() {
    setActiveImageIndex((current) => (current === 0 ? activeProject.images.length - 1 : current - 1));
  }

  function showNextImage() {
    setActiveImageIndex((current) => (current + 1) % activeProject.images.length);
  }

  return (
    <section id="projetos" className="section-shell py-20 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">Projetos</p>
        <h2 className="section-title mt-4">Espacos desenhados para combinar com a sua casa.</h2>
        <p className="section-copy mt-5">
          Cada ambiente recebe uma leitura propria de uso, circulacao e armazenamento para que a
          marcenaria faca sentido na rotina e nao apenas no visual.
        </p>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => {
          const isActive = index === activeProjectIndex;

          return (
            <button
              key={project.title}
              type="button"
              onClick={() => selectProject(index)}
              className={`group overflow-hidden rounded-[1.75rem] border bg-[color:var(--surface)] text-left transition duration-300 ${
                isActive
                  ? 'border-[color:var(--accent)] shadow-[0_30px_70px_rgba(238,147,51,0.14)]'
                  : 'border-[color:var(--border-soft)] hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(238,147,51,0.1)]'
              }`}
            >
              <div className="overflow-hidden">
                <Image
                  src={project.coverImage}
                  alt={`Projeto de ${project.title}`}
                  width={1400}
                  height={960}
                  sizes="(min-width: 1280px) 26vw, (min-width: 768px) 42vw, 100vw"
                  className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-3xl text-[color:var(--text-primary)]">{project.title}</h3>
                  <span className="rounded-full bg-[color:var(--surface-alt)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-deep)]">
                    {isActive ? 'Selecionado' : 'Ver area'}
                  </span>
                </div>
                <p className="mt-4 text-base leading-7 text-[color:var(--text-secondary)]">{project.summary}</p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-8 rounded-[2rem] border border-[color:var(--border-soft)] bg-[color:var(--surface)] p-5 shadow-[0_30px_80px_rgba(238,147,51,0.1)] lg:grid-cols-[auto_1fr] lg:p-8">
        <div className="flex items-center justify-center gap-3 lg:flex-col">
          <button
            type="button"
            onClick={showPreviousImage}
            aria-label="Imagem anterior"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-[color:var(--border-soft)] text-3xl text-[color:var(--text-primary)] transition hover:bg-[color:var(--surface-alt)]"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={showNextImage}
            aria-label="Proxima imagem"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-[color:var(--border-soft)] text-3xl text-[color:var(--text-primary)] transition hover:bg-[color:var(--surface-alt)]"
          >
            ›
          </button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="overflow-hidden rounded-[1.6rem] bg-[color:var(--surface-alt)]">
            <Image
              src={activeProject.images[activeImageIndex]}
              alt={`${activeProject.title} planejado em destaque`}
              width={1400}
              height={1100}
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="h-[360px] w-full object-cover sm:h-[440px] lg:h-[560px]"
            />
          </div>

          <div className="flex flex-col justify-between gap-6">
            <div>
              <p className="eyebrow">Area em destaque</p>
              <h3 className="section-title mt-4 text-left">{activeProject.title}</h3>
              <p className="section-copy mt-5 text-left">{activeProject.highlight}</p>
            </div>

            <div className="rounded-[1.5rem] bg-[color:var(--surface-alt)] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--text-muted)]">
                O que guiou esse tipo de projeto
              </p>
              <p className="mt-4 text-lg leading-8 text-[color:var(--text-primary)]">
                Funcionalidade, leitura limpa de materiais e aproveitamento total do espaco sem perder
                a sensacao de aconchego.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {activeProject.images.map((image, index) => (
                <button
                  key={`${activeProject.title}-${index}`}
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                  className={`overflow-hidden rounded-2xl border ${
                    index === activeImageIndex
                      ? 'border-[color:var(--accent)]'
                      : 'border-[color:var(--border-soft)]'
                  }`}
                  aria-label={`Abrir imagem ${index + 1}`}
                >
                  <Image
                    src={image}
                    alt=""
                    width={160}
                    height={160}
                    sizes="96px"
                    className="h-20 w-20 object-cover sm:h-24 sm:w-24"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
