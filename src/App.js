import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faCity, faInfoCircle, faSeedling, faShieldAlt, faSmile, faTint } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table'
import ToggleButton from 'react-bootstrap/ToggleButton'

import './App.css';
import React from 'react';

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

function upkeepCell(name, amount, details) {
  return (<td key={name}><span style={{'textDecorationLine': 'underline', 'textDecorationStyle': 'dotted'}} title={(details || []).join('\n')}>{amount || 0}</span></td>);
}

function detailString(delta, plot) {
  return (delta > 0 ? '+' : '') + delta.toString() + ' from ' + plot.count.toString() + ' level ' + plot.level + ' ' + plot.name + ' plot' + (plot.count === 1 ? '' : 's');
}

function UpkeepComponent(props) {
  var upkeep = 0;
  var details = [];
  props.plots.forEach((plot) => {
    var plotUpkeep = plotTypes[plot.name].upkeep[plot.level - 1];
    if (plotUpkeep.hasOwnProperty(props.resource)) {
      var delta = plotUpkeep[props.resource] * plot.count;
      upkeep = upkeep + delta;
      details.push(detailString(delta, plot));
    }
  });
  return upkeepCell(props.resource, upkeep, details);
}

function UpkeepCategory(props) {
  var upkeep = 0;
  var details = [];
  props.plots.forEach((plot) => {
    var plotUpkeep = plotTypes[plot.name].upkeep[plot.level - 1];
    var delta = 0;
    componentsByCategory[props.category].forEach((resource) => {
      delta = delta + (plotUpkeep[resource] || 0) * plot.count;
    })
    upkeep = upkeep + delta;
    details.push(detailString(delta, plot));
  });
  return upkeepCell(props.category, upkeep, details);
}

function Settlement(props) {
  var plots = props.settlement.plots;
  var resources = ['Food', 'Water', 'Power', 'Safety', 'Happiness', 'Caps', 'Storage'].map(resource => <UpkeepComponent key={resource} plots={plots} resource={resource} />);
  if (props.difficulty === ScrapComponents) {
    resources = resources.concat(tableColumns.map(resource => {
      return <UpkeepComponent key={resource} plots={plots} resource={resource} />
    }))
  } else if (props.difficulty === ScrapCategories) {
    resources = resources.concat(['Building Materials', 'Machine Parts', 'Organic Materials', 'Rare Materials'].map(category => {
      return <UpkeepCategory key={category} plots={plots} category={category} />
    }))
  } else if (props.difficulty === Scrap) {

  }
  return (<tr>
    <td><FontAwesomeIcon icon={faCity} style={{color: props.settlement.claimed ? 'green' : 'red' }} /> {props.name}</td>
    {resources}
  </tr>);
}

function ResourceHeader(props) {
  if (props.difficulty === ScrapComponents) {
    return (<thead>
      <tr>
        <th scope='col'>Name</th>
        <th colSpan={5} scope='col'>Settlement Resources</th>
        <th scope='col'>Caps</th>
        <th scope='col'>Scrap Storage</th>
        <th colSpan={7} scope='col'>Building Materials</th>
        <th colSpan={9} scope='col'>Machine Parts</th>
        <th colSpan={9} scope='col'>Organic Materials</th>
        <th colSpan={6} scope='col'>Rare Materials</th>
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
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </thead>);
  } else if (props.difficulty === ScrapCategories) {
    return (<thead>
      <tr>
        <th scope='col'>Name</th>
        <th colSpan={5} scope='col'>Settlement Resources</th>
        <th scope='col'>Caps</th>
        <th scope='col'>Scrap Storage</th>
        <th scope='col'>Building Materials</th>
        <th scope='col'>Machine Parts</th>
        <th scope='col'>Organic Materials</th>
        <th scope='col'>Rare Materials</th>
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
        <th></th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </thead>);
  } else if (props.difficulty === Scrap) {
    return (<thead>
      <tr>
        <th scope='col'>Name</th>
        <th colSpan={5} scope='col'>Settlement Resources</th>
        <th scope='col'>Caps</th>
        <th scope='col'>Scrap Storage</th>
        <th scope='col'>Scrap</th>
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
      </tr>
    </thead>);
  } else {
    return (<Alert variant='danger'>Unrecognized difficulty level: {props.difficulty}</Alert>);
  }
}

class Planner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      difficulty: ScrapCategories,
      showUnclaimed: true,
    };
  };

  changeDifficulty = (event) => {
    this.setState({difficulty: parseInt(event.target.value)});
  };

  toggleSettlements = (checked) => {
    this.setState({showUnclaimed: checked});
  };

  render() {
    return (
      <Container>
        <Row>
          <Col colSpan={2}>Options</Col>
        </Row>
        <Row>
          <Col>Resource Complexity</Col>
          <Col>
            <select onChange={(e) => this.changeDifficulty(e)} value={this.state.difficulty}>
              <option key={Scrap} value={Scrap}>Scrap</option>
              <option key={ScrapCategories} value={ScrapCategories}>Scrap Categories</option>
              <option key={ScrapComponents} value={ScrapComponents}>Scrap Components</option>
            </select>
          </Col>
        </Row>
        <Row>
          <Col>Show Unclaimed Settlements</Col>
          <Col>
            <ToggleButton type="checkbox" onChange={(e) => this.toggleSettlements(e.currentTarget.checked)} value={this.state.showUnclaimed ? 'yes' : 'no' } checked={this.state.showUnclaimed} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Table>
              <ResourceHeader difficulty={this.state.difficulty} />
              <tbody>
                {this.props.settlements.filter(s => this.state.showUnclaimed || s.claimed ).map(settlement =>
                <Settlement key={settlement.name} name={settlement.name} difficulty={this.state.difficulty} settlement={settlement} expanded={false} caravan={false} />
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  };
}

function App() {
  return (<Planner settlements={settlements} />);
}

export default App;

const settlements = [
  {
    name: 'Abernathy Farm',
    claimed: false,
    plots: [],
    nonPlots: [],
  },
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

const componentsByCategory = {
  'Building Materials': ['Aluminum', 'Asbestos', 'Concrete', 'Fiberglass', 'Glass', 'Steel', 'Wood'],
  'Machine Parts': ['Circuitry', 'Copper', 'Gears', 'Lead', 'Plastic', 'Rubber', 'Screws', 'Silver', 'Springs'],
  'Organic Materials': ['Acid', 'Adhesive', 'Bone', 'Ceramic', 'Cloth', 'Cork', 'Fertilizer', 'Leather', 'Oil'],
  'Rare Materials': ['Antiseptic', 'Ballistic Fiber', 'Crystal', 'Fiber Optics', 'Gold', 'Nuclear Material'],
}

const tableColumns = [
  'Aluminum', 'Asbestos', 'Concrete', 'Fiberglass', 'Glass', 'Steel', 'Wood',
  'Circuitry', 'Copper', 'Gears', 'Lead', 'Plastic', 'Rubber', 'Screws', 'Silver', 'Springs',
  'Acid', 'Adhesive', 'Bone', 'Ceramic', 'Cloth', 'Cork', 'Fertilizer', 'Leather', 'Oil',
  'Antiseptic', 'Ballistic Fiber', 'Crystal', 'Fiber Optics', 'Gold', 'Nuclear Material',
];