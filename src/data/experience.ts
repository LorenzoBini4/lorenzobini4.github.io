export type Experience = {
  place: string;
  time: string;
  title: string;
  subtitle?: string;
  category: 'work' | 'school';
};

export const experiences: Experience[] = [
  {
    place: 'Carnegie Mellon University',
    time: '2025 — current',
    title: 'PhD Research Internship, Computational Biology Department',
    subtitle: "GenAI for epigenomics and gene regulation in Jian Ma's group",
    category: 'work',
  },
  {
    place: 'University of Geneva',
    time: 'PhD — current',
    title: 'PhD Candidate in Artificial Intelligence',
    subtitle: 'VIPER group with Stéphane Marchand-Maillet working on graph generative models and self-supervised/adversarial learning',
    category: 'school',
  },
  {
    place: 'Geneva University Hospital (HUG)',
    time: 'Current collaboration',
    title: 'Minimal Residual Disease detection in Leukemia from flow cytometry data',
    subtitle: 'Active/self-supervised learning for rare AML/ALL event detection',
    category: 'work',
  },
  {
    place: 'University of Geneva, CUI',
    time: 'Teaching — current',
    title: 'Teaching Assistant',
    subtitle: 'Computational Finance; Natural Language Processing; Information Retrieval',
    category: 'work',
  },
];
