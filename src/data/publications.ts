export type Publication = {
  title: string;
  url?: string;
  authors: string;
  venue: string;
  paperUrl?: string;
  slidesUrl?: string;
  posterUrl?: string;
  videoUrl?: string;
  codeUrl?: string;
  dataUrl?: string;
  citeUrl?: string;
  selected?: boolean;
};

export const publications: Publication[] = [
  {
    title: 'LapDDPM: A Conditional Graph Diffusion Model for scRNA-seq Generation with Spectral Adversarial Perturbations',
    url: 'https://icml.cc/virtual/2025/51194',
    authors: 'Lorenzo Bini, Stéphane Marchand-Maillet',
    venue: "ICML'2025 + GenBio Workshop: The Second Workshop on Generative AI and Biology, Vancouver.",
    paperUrl: 'https://arxiv.org/pdf/2506.13344',
    codeUrl: 'https://github.com/LorenzoBini4/laplace-DDPM',
    citeUrl: '/citations/lapddpm-icml.html',
    selected: true,
  },
  {
    title: 'Self-Supervised Graph Learning via Spectral Bootstrapping and Laplacian-Based Augmentations',
    url: 'https://arxiv.org/abs/2506.20362',
    authors: 'Lorenzo Bini, Stéphane Marchand-Maillet',
    venue: 'To appear in 2026 (preprint, under double-blind review as a journal paper).',
    paperUrl: 'https://arxiv.org/pdf/2506.20362',
    codeUrl: 'https://github.com/LorenzoBini4/laplaceGNN',
    citeUrl: '/citations/laplaceGNN.html',
    selected: true,
  },
  {
    title: 'Massive Activations in Graph Neural Networks: Decoding Attention for Domain-Dependent Interpretability',
    url: 'https://ceur-ws.org/Vol-4059/paper2.pdf',
    authors: 'Lorenzo Bini*, Marco Sorbi*, Stéphane Marchand-Maillet',
    venue: "European Conference on Artificial Intelligence (ECAI'2025), Bologna — Oral Presentation + ICLR'2025 Workshop XAI4Science: From Understanding Model Behavior to Discovering New Scientific Knowledge, Singapore.",
    paperUrl: 'https://ceur-ws.org/Vol-4059/paper2.pdf',
    codeUrl: 'https://github.com/LorenzoBini4/GNN-MAs',
    citeUrl: '/citations/gnn-ma.html',
    selected: true,
  },
  {
    title: 'Injecting Hierarchical Biological Priors into Graph Neural Networks for Flow Cytometry Prediction',
    url: 'https://icml.cc/virtual/2024/35934',
    authors: 'Lorenzo Bini, Stéphane Marchand-Maillet',
    venue: "ICML'2024 + Workshop on Accessible and Efficient Foundation Models for Biological Discovery, Wien, Austria.",
    paperUrl: 'https://openreview.net/pdf?id=HJ5ILdCHFx',
    codeUrl: 'https://github.com/LorenzoBini4/FCHC-GNN-Hierarchical',
    citeUrl: '/citations/FCHC-GNNs.html',
    selected: true,
  },
  {
    title: 'FlowCyt: A Comparative Study of Deep Learning Approaches for Multi-Class Classification in Flow Cytometry Benchmarking',
    url: 'https://proceedings.mlr.press/v248/bini24a.html',
    authors: 'Lorenzo Bini, Margarita Liarou, Thomas Matthes, Stéphane Marchand-Maillet',
    venue: "Conference on Health, Inference, and Learning (CHIL'24), New-York, NY.",
    paperUrl: 'https://proceedings.mlr.press/v248/bini24a.html',
    codeUrl: 'https://github.com/LorenzoBini4/FlowCyt-Classification-Benchmark',
    citeUrl: '/citations/flowcyt-benchmark-deep-learning.html',
    dataUrl: 'https://cuicloud.unige.ch/index.php/s/55PHBLEynrp5pN8',
    selected: true,
  },
];
