import React from 'react';
import { Container } from './layout/Container';
import { SectionTitle } from './ui/SectionTitle';
import { ProjectCard } from './projects/ProjectCard';
import { projects } from '@/data/projects';

export function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}