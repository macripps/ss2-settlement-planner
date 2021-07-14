import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faCity, faInfoCircle, faSeedling, faShieldAlt, faSmile, faTint } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table'

import './App.css';

const Scrap = 1;
const ScrapCategories = 2;
const ScrapComponents = 3;

function ConcreteIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" strokeWidth="2" viewBox="0 0 32 32" width="16" height="16">
    <polyline points="2 10, 22 30, 30 22, 10 2, 2 10" fill="none" />
    <line x1="12" y1="20" x2="20" y2="12" />
    <polyline points="2 10, 1 9, 2 8, 3 9, 2 10" />
    <polyline points="10 2, 9 1, 8 2, 9 3, 10 2" />
    <polyline points="22 30, 23 31, 24 30, 23 29, 22 30" />
    <polyline points="30 22, 31 23, 30 24, 29 23, 30 22" />
  </svg>;
}

function Upkeep(props) {
  var upkeep = 0;
  var details = [];
  props.plots.forEach((plot) => {
    var plotUpkeep = plotTypes[plot.name].upkeep[plot.level - 1];
    if (plotUpkeep.hasOwnProperty(props.resource)) {
      var delta = plotUpkeep[props.resource] * plot.count;
      upkeep = upkeep + delta;
      var detailString = (delta > 0 ? '+' : '') + delta.toString() + ' from ' + plot.count.toString() + ' ' + plot.name + ' plot' + (plot.count === 1 ? '' : 's');
      details.push(detailString);
    }
  });
  return (<td key={props.resource}><span style={{'text-decoration-line': 'underline', 'text-decoration-style': 'dotted'}} title={(details || []).join('\n')}>{upkeep || 0}</span></td>);
}

function Settlement(props) {
  var plots = props.settlement.plots;
  var resources = tableColumns.map(resource => {
    return <Upkeep plots={plots} resource={resource} />
  })
  return (<tr>
    <td><FontAwesomeIcon icon={faCity} /> {props.name}</td>
    {resources}
  </tr>);
}

function App() {
  const difficulty = ScrapComponents;
  const settlementItems = settlements.map(settlement =>
    <Settlement name={settlement.name} settlement={settlement} expanded={false} caravan={false} />
  );
  return (
    <Table>
      <thead>
        <tr>
          <th scope='col'>Name</th>
          <th colspan={5} scope='col'>Settlement Resources</th>
          <th scope='col'>Caps</th>
          <th scope='col'>Scrap Storage</th>
          <th colspan={7} scope='col'>Building Materials</th>
          <th colspan={9} scope='col'>Machine Parts</th>
          <th colspan={9} scope='col'>Organic Materials</th>
          <th colspan={6} scope='col'>Rare Materials</th>
        </tr>
        <tr>
          <th></th>
          <th><FontAwesomeIcon icon={faSeedling} title='Food' /></th>
          <th><FontAwesomeIcon icon={faTint} title='Water' /></th>
          <th><FontAwesomeIcon icon={faBolt} title='Power' /></th>
          <th><FontAwesomeIcon icon={faShieldAlt} title='Safety' /></th>
          <th><FontAwesomeIcon icon={faSmile} title='Happiness' /></th>
          <th></th>
          <th></th>
          <th></th>
          <th><ConcreteIcon /></th>
        </tr>
      </thead>
      <tbody>
        {settlementItems}
      </tbody>
    </Table>
  );
}

export default App;

const settlements = [
  // 'Abernathy Farm': {},
  // 'Boston Airport': {},
  // 'Bunker Hill': {},
  // 'The Castle': {},
  // 'Coastal Cottage': {},
  // 'Covenant': {},
  // 'County Crossing': {},
  // 'Croup Manor': {},
  // 'Egret Tours Marina': {},
  // 'Finch Farm': {},
  // 'Graygarden': {},
  // 'Greentop Nursery': {},
  // "Hangman's Alley": {},
  // 'Home Plate': {},
  // 'Jamaica Plain': {},
  // 'Kingsport Lighthouse': {},
  // 'Murkwater Construction Site': {},
  // 'Nordhagen Beach': {},
  // 'Oberland Station': {},
  // 'Outpost Zimonja': {},
  // 'Red Rocket Truck Stop': {},
  {
    name: 'Sanctuary',
    claimed: true,
    plots: [],
    nonPlots: [],
  },
  // 'The Slog': {},
  // 'Somerville Place': {},
  // 'Spectacle Island': {},
  {
    name: 'Starlight Drive-In',
    claimed: true,
    plots: [
      {
        name: 'Single Bed Residence',
        level: 1,
        count: 13,
      },
      {
        name: 'Basic Farms',
        level: 1,
        count: 5,
      },
      // {
      //   name: 'Bar',
      //   level: 1,
      //   count: 1,
      // },
      // {
      //   name: 'Clothing Store',
      //   level: 1,
      //   count: 1,
      // },
      // {
      //   name: 'Basic Martial',
      //   level: 1,
      //   count: 3,
      // },
      // {
      //   name: 'Relaxation',
      //   level: 1,
      //   count: 1,
      // }
    ],
    nonPlots: [],
  },
  // 'Sunshine Tidings Co-op': {},
  // 'Taffington Boathouse': {},
  // 'Tenpines Bluff': {},
  // 'Warwick Homestead': {},
];

const plotTypes = {
  'Single Bed Residence': {
    plotType: 'Residential',
    upkeep: [
      {
        'Power': -1,
        'Caps': 6,
      },
      {
        'Power': -2,
        'Safety': -1,
        'Water': -1,
        'Food': -1,
        'Caps': 12,
        'Wood': -3,
      },
      {
        'Power': -3,
        'Safety': -2,
        'Water': -2,
        'Food': -2,
        'Caps': 20,
        'Wood': -9,
        'Steel': -4,
        'Cloth': -4,
      },
    ],
  },
  'Basic Farms': {
    plotType: 'Agricultural',
    upkeep: [
      {
        'Caps': -2,
        'Food': 2,
        'Water': -1,
      },
      {
        'Caps': -4,
        'Fertilizer': -1,
        'Food': 5,
        'Water': -2,
      },
      {
        'Caps': -8,
        'Fertilizer': -2,
        'Food': 8,
        'Water': -3,
      }
    ],
  }
}
/*
      {
        name: 'Multi-Bed Residence',
        upkeep: [
          {
            'Caps': 6,
            'Wood': -3,
            'Steel': -4,
            'Asbestos': -1,
            'Power': -1,
          },
          {
            'Caps': 12,
            'Wood': -6,
            'Steel': -8,
            'Asbestos': -2,
            'Cloth': -6,
            'Ceramic': -2,
            'Power': -2,
            'Safety': -1,
            'Water': -1,
            'Food': -1,
          },
          {
            'Caps': 20,
            'Wood': -3,
            'Steel': -4,
            'Asbestos': -1,
            'Cloth': -12,
            'Ceramic': -5,
            'Springs': -2,
            'Power': -3,
            'Safety': -2,
            'Water': -2,
            'Food': -2,
          },
        ],
      },
    ],
  },
  {
    name: 'Agricultural',
    classes: [
      'Basic Farms',
      'Advanced Farms',
      'High-Tech Farms',
    ],
  },
  {
    name: 'Industrial',
    classes: [
      'Building Materials Gathering',
      'Junk Gathering',
      'Machine Parts Gathering',
      'Organic Materials Gathering',
      'Rare Materials Gathering',
      'Conversion',
      'Production',
    ],
  },
  {
    name: 'Martial',
    classes: [
      'Basic Defenses',
      'Advanced Defenses',
      'High-Tech Defenses',
    ],
  },
  {
    name: 'Municipal',
    classes: [
      'Caravan Services',
      'Tax Services',
      'Basic Power Plant',
      'Advanced Power Plant',
      'High-Tech Power Plant',
      'Communications',
      'Power Transfer',
      'Basic Water Plant',
      'Advanced Water Plant',
      'High-Tech Water Plant',
    ],
  },
  {
    name: 'Commercial',
    classes: [
      'Armor Store',
      'Bar',
      'Barber Shop',
      'Bookstore',
      'Medical Clinic',
      'Clothing Store',
      'Furniture Store',
      'General Store',
      'Pet Store',
      'Power Armor Store',
      'Weapons Store',
    ],
  },
  {
    name: 'Recreational',
    classes: [
      'Relaxation',
      'Agility Training',
      'Charisma Training',
      'Endurance Training',
      'Intelligence Training',
      'Luck Training',
      'Perception Training',
      'Strength Training',
    ],
  },
]
*/

const resources = {
  'Caps': '',
  'Food': 'Settlement',
  'Happiness': 'Settlement',
  'Power': 'Settlement',
  'Safety': 'Settlement',
  'Scrap Storage': 'Settlement',
  'Water': 'Settlement',
  'Aluminum': 'Building Materials',
  'Asbestos': 'Building Materials',
  'Concrete': 'Building Materials',
  'Fiberglass': 'Building Materials',
  'Glass': 'Building Materials',
  'Steel': 'Building Materials',
  'Wood': 'Building Materials',
  'Circuitry': 'Machine Parts',
  'Copper': 'Machine Parts',
  'Gears': 'Machine Parts',
  'Lead': 'Machine Parts',
  'Plastic': 'Machine Parts',
  'Rubber': 'Machine Parts',
  'Screws': 'Machine Parts',
  'Silver': 'Machine Parts',
  'Springs': 'Machine Parts',
  'Acid': 'Organic Materials',
  'Adhesive': 'Organic Materials',
  'Bone': 'Organic Materials',
  'Ceramic': 'Organic Materials',
  'Cloth': 'Organic Materials',
  'Cork': 'Organic Materials',
  'Fertilizer': 'Organic Materials',
  'Leather': 'Organic Materials',
  'Oil': 'Organic Materials',
  'Antiseptic': 'Rare Materials',
  'Ballistic Fiber': 'Rare Materials',
  'Crystal': 'Rare Materials',
  'Fiber Optics': 'Rare Materials',
  'Gold': 'Rare Materials',
  'Nuclear Material': 'Rare Materials',
};

const tableColumns = [
  'Food', 'Water', 'Power', 'Safety', 'Happiness',
  'Caps',
  'Storage',
  'Aluminum', 'Asbestos', 'Concrete', 'Fiberglass', 'Glass', 'Steel', 'Wood',
  'Circuitry', 'Copper', 'Gears', 'Lead', 'Plastic', 'Rubber', 'Screws', 'Silver', 'Springs',
  'Acid', 'Adhesive', 'Bone', 'Ceramic', 'Cloth', 'Cork', 'Fertilizer', 'Leather', 'Oil',
  'Antiseptic', 'Ballistic Fiber', 'Crystal', 'Fiber Optics', 'Gold', 'Nuclear Material',
];