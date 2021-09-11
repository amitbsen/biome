const DATASETS = [
  {
    domain: 'agriculture',
    summary: [
      'This data layer shows the boundaries of agro-industrial zones, where oil palm and rubber tree plantations, as well as other crops, may be established.',
      'This data layer shows the boundaries of agro-industrial zones, where oil palm and rubber tree plantations, as well as other crops, may be established. In Cameroon, industrial agriculture falls outside of the National Forest Estate. Agricultural plantations are allocated by the Ministry of Economy and Planning to private entities under long-term, renewable contracts, which are then monitored by the Ministry of Agriculture. The agro-industrial data set was mapped using satellite imagery, with ground-truthing to determine the crop type and operating company.',
    ],
    dataProvider: ['Global Forest Watch'],
    sourceLink:
      'https://data.globalforestwatch.org/datasets/gfw::cameroon-agro-industrial-zones/about',
    title: 'Agro-Industrial Zones',
  },
  {
    domain: 'agriculture',
    summary: [
      'This data layer shows the total crop production (metric tonnes) as a measure of output from the cultivated area. The layer currently includes the crops maize.',
    ],
    dataProvider: ['Atlas AI'],
    sourceLink: 'https://docs.atlasai.co/agriculture/',
    title: 'Maize Production',
  },
  {
    domain: 'agriculture',
    summary: [
      'This data layer shows the total crop production (metric tonnes) as a measure of output from the cultivated area. The layer currently includes the rice.',
    ],
    dataProvider: ['Atlas AI'],
    sourceLink: 'https://docs.atlasai.co/agriculture/',
    title: 'Rice Production',
  },
  {
    domain: 'agriculture',
    summary: [
      'This data layer shows the total crop production (metric tonnes) as a measure of output from the cultivated area. The layer currently includes the crops maize.',
    ],
    dataProvider: ['Atlas AI'],
    sourceLink: 'https://docs.atlasai.co/agriculture/',
    title: 'Sorghum Production',
  },
  {
    domain: 'forestry',
    summary: [
      'Boundaries of forests attributed in the non permanent domain and managed by communities.',
      'This data set displays the boundaries of areas designated as Community forests in Cameroon. Community forests legally recognize a community’s ownership rights to forest resources, both timber and non-timber. It includes the right to access, use, withdraw for commercial purposes or subsistence, and exclude others from the forest. The land remains owned by the Cameroonian Government. The community’s rights to forest resources are renewed every five years as long as the community complies with the community forest management agreement. A community may also contract with a third party to commercially harvest timber.',
    ],
    dataProvider: ['Global Forest Watch'],
    sourceLink:
      'https://data.globalforestwatch.org/datasets/gfw::cameroon-community-forests/about',
    title: 'Community Forests',
  },
  {
    domain: 'forestry',
    summary: [
      'Boundaries of permanent forests managed by the government (Forest Management Units) or councils (Council Forests).',
      'Logging in Cameroon’s forests is permitted within Forest Management Units (FMUs). This data set displays the FMUs within Cameroon’s permanent forest estate. Selective logging is permitted in Cameroon’s FMUs, which are further divided into logging concessions called annual allowable cuts (AACs). These logging permits require owners and operators to maintain permanent forest cover. This data set was produced in collaboration between the Cameroon Ministry of Forestry and Wildlife and WRI.',
    ],
    dataProvider: ['Global Forest Watch'],
    sourceLink:
      'https://data.globalforestwatch.org/datasets/gfw::cameroon-forest-management-units/about',
    title: 'Forest Management Units',
  },
  {
    domain: 'forestry',
    summary: [
      'Displays boundaries of areas allocated by governments to companies for extraction of minerals',
      'Logging concession refers to an area allocated by a government for logging in a public forest. Logging concessions are distinct from wood fiber concessions, where plantation forests are established for the production of pulp and paper products. Concession is used as a general term for licenses, permits, or other contracts that confer rights to private companies to manage and extract timber from public forests; terminology varies at the national level, however, and includes "forest permits," "tenures," "licenses," and other terms.The logging concession data on GFW, while displayed as a single layer, is assembled on a country-by-country basis from multiple sources.Logging concession data displayed on the GFW website vary from country to country by date and data sources. Data may come from government agencies, NGOs, or other organizations.',
    ],
    dataProvider: ['Global Forest Watch'],
    sourceLink:
      'https://data.globalforestwatch.org/datasets/gfw::managed-forest-concessions/about',
    title: 'Managed Forest Concessions',
  },
  {
    domain: 'infrastructure',
    summary: [
      'This feature layer provides access to OpenStreetMap (OSM) buildings data for Africa, which is updated every 1 minute with the latest edits. This hosted feature layer view is referencing a hosted feature layer of OSM polygon (closed way) data in ArcGIS Online that is updated with minutely diffs from the OSM planet file.  This feature layer view includes building features defined as a query against the hosted feature layer (i.e. building is not blank).',
    ],
    dataProvider: ['Open Street Map', 'Esri'],
    sourceLink:
      'https://amitbsen.maps.arcgis.com/home/item.html?id=bb86721588ea49b6b44b10b7d5d2b0b1',
    title: 'Buildings',
  },
  {
    domain: 'infrastructure',
    summary: [
      'Atlas AI’s Electrification Status layer estimates the availability of access to the electricity grid at a particular location, i.e. the presence or absence of electrification. At any snapshot in time, the Electrification Status is binary - either "yes" or "no".',
    ],
    dataProvider: ['Atlas AI'],
    sourceLink: 'https://docs.atlasai.co/infrastructure/electrification/',
    title: 'Electrification',
  },
  {
    domain: 'infrastructure',
    summary: [
      'This feature layer provides access to OpenStreetMap (OSM) landuse areas data for Africa, which is updated every 15 minutes with the latest edits. This hosted feature layer view is referencing a hosted feature layer of OSM polygon (closed way) data in ArcGIS Online that is updated with minutely diffs from the OSM planet file.  This feature layer view includes landuse features defined as a query against the hosted feature layer (i.e. landuse is not blank).',
    ],
    dataProvider: ['Open Street Map', 'Esri'],
    sourceLink:
      'https://amitbsen.maps.arcgis.com/home/item.html?id=1825495e3c1a4238a2b234d4fdc1861d',
    title: 'Landuse Areas',
  },
  {
    domain: 'infrastructure',
    summary: [
      'This layer represents a network of classified roads, rural roads and forest tracks in Cameroon. The road layer is updated using recently acquired medium-resolution satellite images for the period 2005 to 2010. The new forest roads have been digitized and organized according to the data source (type of imagery), The date (acquisition date of the image), as well as the state of the road and its main use. The status of the old roads has been updated based on more recent observations using satellite imagery. The refining of data on existing public, departmental, regional and national roads was carried out on the basis of information provided by topographical maps and ground tracking for areas where cloud cover over the images made identification difficult. Given the different sources of this layer, the accuracy of the data is a function of the spatial resolution of the satellite images used.',
    ],
    dataProvider: ['Global Forest Watch'],
    sourceLink:
      'https://data.globalforestwatch.org/datasets/minfof::road-network/about',
    title: 'Road Networks',
  },
  {
    domain: 'infrastructure',
    summary: [
      'This feature layer provides access to OpenStreetMap (OSM) waterways data for Africa, which is updated every 15 minutes with the latest edits. This hosted feature layer view is referencing a hosted feature layer of OSM line (way) data in ArcGIS Online that is updated with minutely diffs from the OSM planet file.  This feature layer view includes waterway features defined as a query against the hosted feature layer (i.e. waterway is not blank).    ',
    ],
    dataProvider: ['Open Street Map', 'Esri'],
    sourceLink:
      'https://amitbsen.maps.arcgis.com/home/item.html?id=82232d0415c04e7086414dff7eb1310f',
    title: 'Waterways',
  },
  {
    domain: 'people',
    summary: [
      "Atlas AI's Population layer provides the count of people (number) and their density (people per square kilometer) for the African continent (52 countries) and India.",
    ],
    dataProvider: ['Atlas AI'],
    sourceLink: 'https://docs.atlasai.co/population/',
    title: 'Population',
  },
  {
    domain: 'people',
    summary: [
      "Atlas AI's Population layer provides the count of people (number) and their density (people per square kilometer) for the African continent (52 countries) and India.",
    ],
    dataProvider: ['Atlas AI'],
    sourceLink: 'https://docs.atlasai.co/population/',
    title: 'Population Density',
  },
  {
    domain: 'people',
    summary: [
      'Atlas AI’s Asset Wealth layer estimates household asset wealth based on asset ownership.',
      'Accurate and comprehensive measurements of economic well-being are fundamental inputs into commerce, research, and policy but such measures are unavailable at a local level in many parts of the world. Our Asset Wealth layer is produced from a deep learning model that predicts survey-based estimates from satellite imagery. To facilitate comparison within and across countries, we transformed Asset Wealth into a normalized index. The index is then also divided into nine quantiles (i.e. bins) for easily comparing the Asset Wealth estimate at a particular location to estimates for other locations.',
    ],
    dataProvider: ['Atlas AI'],
    title: 'Asset Wealth',
    sourceLink: 'https://docs.atlasai.co/economic%20well-being/asset_wealth/',
  },
  {
    domain: 'people',
    summary: [
      'Atlas AI’s Spending layer estimates Consumption Expenditure, a measure of how much households spend on the goods and services they consume. The term Consumption Expenditure is redundant because consumption indicates the volume of goods and services while expenditure attaches a monetary ($) value to that consumption. A simpler way to capture this idea is to say “spending”.',
      'The Spending concept is one good way to measure economic well-being. It reflects what people need to spend money on for basic needs and services, as well as what they choose to spend money on for discretionary activities and goods. To make comparisons and calculations easier, we normalize this as household spending per person, per day.',
    ],
    dataProvider: ['Atlas AI'],
    title: 'Economic Spending',
    sourceLink: 'https://docs.atlasai.co/economic%20well-being/spending/',
  },
  {
    domain: 'infrastructure',
    summary: [
      'This feature layer provides access to OpenStreetMap (OSM) highways data for Africa, which is updated every 5 minutes with the latest edits. This hosted feature layer view is referencing a hosted feature layer of OSM line (way) data in ArcGIS Online that is updated with minutely diffs from the OSM planet file.  This feature layer view includes highway features defined as a query against the hosted feature layer (i.e. highway is not blank).',
    ],
    dataProvider: ['Open Street Map', 'Esri'],
    title: 'Highways',
    sourceLink:
      'https://amitbsen.maps.arcgis.com/home/item.html?id=6d78851a40f54041a775d7c6f4b2633e',
  },
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

export {DOMAINS, DOMAINS_MAP, DATASETS};
