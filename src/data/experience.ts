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
    time: '2025 (6-month internship)',
    title: 'Visiting Researcher, Computational Biology Department',
    subtitle: "GenAI for epigenomics and gene regulation in Jian Ma's group",
    category: 'work',
  },
  {
    place: 'University of Geneva',
    time: 'PhD — current',
    title: 'PhD Candidate in Artificial Intelligence',
    subtitle: 'VIPER group with Stéphane Marchand-Maillet',
    category: 'school',
  },
  {
    place: 'Geneva University Hospitals (HUG)',
    time: 'Current collaboration',
    title: 'Minimal Residual Disease detection on flow cytometry',
    subtitle: 'Active/self-supervised learning to streamline physician annotation',
    category: 'work',
  },
  {
    place: 'University of Geneva, CUI',
    time: 'Teaching',
    title: 'Teaching Assistant',
    subtitle: 'Computational Finance; Natural Language Processing; Information Retrieval',
    category: 'work',
  },
];
