import React from 'react';
import { cvData } from '../data/cvData';

export const PrintableCV: React.FC = () => {
  const { profile, basicInfo, education, skillCategories, experience, projects, achievements } = cvData;

  return (
    <div className="print-only p-8 text-black bg-white max-w-4xl mx-auto font-sans leading-normal">
      {/* Header */}
      <div className="border-b-2 border-slate-900 pb-4 mb-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 uppercase">
          {profile.name}
        </h1>
        <p className="text-sm font-semibold text-slate-700 tracking-wide mt-1">
          {profile.titles.join(' • ')}
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600 mt-2">
          <span>{basicInfo.location}</span>
          <span>|</span>
          <span>{basicInfo.email}</span>
          <span>|</span>
          <span>{basicInfo.phone}</span>
          <span>|</span>
          <span>github.com/{cvData.githubProfile.username}</span>
          <span>|</span>
          <span>linkedin.com/in/{cvData.githubProfile.username}</span>
        </div>
      </div>

      {/* Summary & Objective */}
      <div className="mb-5 page-break-inside-avoid">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
          Career Objective & Summary
        </h2>
        <p className="text-xs text-slate-700 leading-relaxed">
          {profile.summary}
        </p>
      </div>

      {/* Education */}
      <div className="mb-5 page-break-inside-avoid">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
          Education Background
        </h2>
        <div className="space-y-3">
          {education.map((edu) => (
            <div key={edu.id}>
              <div className="flex justify-between items-baseline">
                <span className="text-xs font-bold text-slate-900">{edu.degree}</span>
                <span className="text-xs text-slate-600">{edu.period}</span>
              </div>
              <div className="flex justify-between text-xs text-slate-700 italic">
                <span>{edu.institution} — {edu.location}</span>
                {edu.gpa && <span>GPA: {edu.gpa}</span>}
              </div>
              {edu.honors && (
                <p className="text-[11px] text-slate-600 mt-0.5">
                  <span className="font-semibold">Honors: </span>
                  {edu.honors.join(', ')}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Skills Summary */}
      <div className="mb-5 page-break-inside-avoid">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
          Technical & Professional Competencies
        </h2>
        <div className="space-y-1.5 text-xs text-slate-700">
          {skillCategories.map((cat) => (
            <p key={cat.category}>
              <span className="font-bold text-slate-900">{cat.category}: </span>
              {cat.skills.map(s => s.name).join(', ')}
            </p>
          ))}
        </div>
      </div>

      {/* Experience & Leadership */}
      <div className="mb-5 page-break-inside-avoid">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
          Experience & Organization Leadership
        </h2>
        <div className="space-y-3">
          {experience.map((exp) => (
            <div key={exp.id}>
              <div className="flex justify-between items-baseline">
                <span className="text-xs font-bold text-slate-900">{exp.role}</span>
                <span className="text-xs text-slate-600">{exp.period}</span>
              </div>
              <p className="text-xs text-slate-700 italic mb-1">
                {exp.organization} — {exp.location}
              </p>
              <ul className="list-disc list-inside space-y-0.5 text-xs text-slate-700">
                {exp.bulletPoints.map((point, idx) => (
                  <li key={idx} className="leading-snug">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Key Projects */}
      <div className="mb-5 page-break-inside-avoid">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
          Key Software Engineering Projects
        </h2>
        <div className="space-y-2.5">
          {projects.slice(0, 3).map((proj) => (
            <div key={proj.id}>
              <div className="flex justify-between items-baseline">
                <span className="text-xs font-bold text-slate-900">{proj.title}</span>
                <span className="text-[11px] text-slate-500">{proj.technologies.join(', ')}</span>
              </div>
              <p className="text-xs text-slate-700 leading-snug">
                {proj.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications & Achievements */}
      <div className="page-break-inside-avoid">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
          Certifications & Awards
        </h2>
        <ul className="list-disc list-inside space-y-1 text-xs text-slate-700">
          {achievements.slice(0, 4).map((ach) => (
            <li key={ach.id}>
              <span className="font-bold text-slate-900">{ach.title}</span> — {ach.issuer} ({ach.date})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
