/* eslint-disable next/no-img-element -- YouTube thumbnails are served directly in the static site */
import { ArrowUpRight, Play } from 'lucide-react';
import type { Course } from '@/app/data';

export function CourseCard({ course, numbered = false }: { course: Course; numbered?: boolean }) {
  return (
    <article className="course-card">
      <a href={course.url} target="_blank" rel="noreferrer" className="course-image" aria-label={`Ver ${course.title} en YouTube`}>
        <img src={course.thumbnail} alt={`Miniatura del curso ${course.title}`} loading="lazy" />
        <span className="play-chip"><Play size={16} fill="currentColor" aria-hidden="true" /></span>
        {numbered && <span className="course-number" aria-hidden="true">{course.lessons.split(' ')[0]}</span>}
      </a>
      <div className="course-body">
        <div className="meta-row"><span>{course.level}</span><span>{course.lessons}</span></div>
        <h3><a href={course.url} target="_blank" rel="noreferrer">{course.title}</a></h3>
        <p>{course.description}</p>
        {numbered && <a className="card-link" href={course.url} target="_blank" rel="noreferrer">Ver curso <ArrowUpRight size={15} aria-hidden="true" /></a>}
      </div>
    </article>
  );
}
