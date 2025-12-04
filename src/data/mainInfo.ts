import profileRoundPic from '~/assets/images/profile_round.png';

export const mainInfo = {
  name: 'Lorenzo Bini',
  title: 'PhD Candidate, University of Geneva',
  email: 'lorenzo.bini@unige.ch',
  profilePic: profileRoundPic.src ?? profileRoundPic,
  socials: [
    { icon: 'fa-brands fa-github', url: 'https://github.com/LorenzoBini4', label: 'GitHub' },
    { icon: 'ai ai-google-scholar', url: 'https://scholar.google.com/citations?user=RRB-j2kAAAAJ&hl=it', label: 'Google Scholar' },
    { icon: 'fa-brands fa-linkedin', url: 'https://www.linkedin.com/in/lorenzo-bini4/', label: 'LinkedIn' },
    { icon: 'fa-brands fa-twitter', url: 'https://twitter.com/LorenzoBini47', label: 'Twitter' },
    { icon: 'fa fa-users', url: 'https://viper.unige.ch/', label: 'VIPER Group' },
  ],
  cvUrl: '/images/ResumeBiniLorenzo.pdf',
};
