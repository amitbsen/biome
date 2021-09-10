const DATASETS = [
  {domain: 'agriculture', title: 'Agro-Industrial Zones'},
  {domain: 'agriculture', title: 'Maize Production'},
  {domain: 'agriculture', title: 'Rice Production'},
  {domain: 'agriculture', title: 'Sorghum Production'},
  {domain: 'forestry', title: 'Community Forests'},
  {domain: 'forestry', title: 'Forest Managment Units'},
  {domain: 'forestry', title: 'Managed Forest Concessions'},
  {domain: 'infrastructure', title: 'Buildings'},
  {domain: 'infrastructure', title: 'Electrification'},
  {domain: 'infrastructure', title: 'Landuse Areas'},
  {domain: 'infrastructure', title: 'Road Networks'},
  {domain: 'infrastructure', title: 'Waterways'},
  {domain: 'people', title: 'Population'},
  {domain: 'people', title: 'Population Density'},
];

const DOMAINS = [
  {
    id: 'agriculture',
    title: 'Agriculture',
    description: 'Discover the agriculture production',
    link: '',
    datasets: DATASETS.filter(({domain}) => domain === 'agriculture'),
  },
  {
    id: 'forestry',
    title: 'Forestry',
    description: 'Explore forestry datasets',
    link: '',
    datasets: DATASETS.filter(({domain}) => domain === 'forestry'),
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    description: 'See the existing infrastructure',
    link: '',
    datasets: DATASETS.filter(({domain}) => domain === 'infrastructure'),
  },
  {
    id: 'people',
    title: 'People',
    description: 'Insights on population',
    link: '',
    datasets: DATASETS.filter(({domain}) => domain === 'people'),
  },
];

const DOMAINS_MAP = new Map();

DOMAINS.forEach(domain => {
  DOMAINS_MAP.set(domain.id, domain);
});

export {DOMAINS, DOMAINS_MAP};
