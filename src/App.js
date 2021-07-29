import Planner from './Planner';
import Settlement from './Settlement';

import './App.css';
import React from 'react';

function App() {
  return (<Planner
    settlements={settlements}
    plotTypes={plotTypes} />);
}

export default App;



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

const settlements = [
  <Settlement name='Abernathy Farm' plotTypes={plotTypes} plots={[]} nonPlots={[]} />,
  <Settlement name='Boston Airport' plotTypes={plotTypes} plots={[]} nonPlots={[]} />,
  <Settlement name='Bunker Hill' plotTypes={plotTypes} plots={[]} nonPlots={[]} />,
  <Settlement name='The Castle' plotTypes={plotTypes} plots={[]} nonPlots={[]} />,
  <Settlement name='Coastal Cottage' plotTypes={plotTypes} plots={[]} nonPlots={[]} />,
  <Settlement name='Covenant' plotTypes={plotTypes} plots={[]} nonPlots={[]} />,
  <Settlement name='County Crossing' plotTypes={plotTypes} plots={[]} nonPlots={[]} />,
  <Settlement name='Croup Manor' plotTypes={plotTypes} plots={[]} nonPlots={[]} />,
  <Settlement name='Egret Tours Marina' plotTypes={plotTypes} plots={[]} nonPlots={[]} />,
  <Settlement name='Finch Farm' plotTypes={plotTypes} plots={[]} nonPlots={[]} />,
  <Settlement name='Graygarden' plotTypes={plotTypes} plots={[]} nonPlots={[]} />,
  <Settlement name='Greentop Nursery' plotTypes={plotTypes} plots={[]} nonPlots={[]} />,
  <Settlement name="Hangman's Alley" plotTypes={plotTypes} plots={[]} nonPlots={[]} />,
  <Settlement name='Home Plate' plotTypes={plotTypes} plots={[]} nonPlots={[]} />,
  <Settlement name='Jamaica Plain' plotTypes={plotTypes} plots={[]} nonPlots={[]} />,
  <Settlement name='Kingsport Lighthouse' plotTypes={plotTypes} plots={[]} nonPlots={[]} />,
  <Settlement name='Murkwater Construction Site' plotTypes={plotTypes} plots={[]} nonPlots={[]} />,
  <Settlement name='Nordhagen Beach' plotTypes={plotTypes} plots={[]} nonPlots={[]} />,
  <Settlement name='Oberland Station' plotTypes={plotTypes} plots={[]} nonPlots={[]} />,
  <Settlement name='Outpost Zimonja' plotTypes={plotTypes} plots={[]} nonPlots={[]} />,
  <Settlement name='Red Rocket Truck Stop' plotTypes={plotTypes} plots={[]} nonPlots={[]} />,
  <Settlement name='Sanctuary' plotTypes={plotTypes} plots={[]} nonPlots={[]} />,
  <Settlement name='The Slog' plotTypes={plotTypes} plots={[]} nonPlots={[]} />,
  <Settlement name='Somerville Place' plotTypes={plotTypes} plots={[]} nonPlots={[]} />,
  <Settlement name='Spectacle Island' plotTypes={plotTypes} plots={[]} nonPlots={[]} />,
  <Settlement name='Starlight Drive-In' plotTypes={plotTypes} plots={[
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
    ]}
    nonPlots={[]} />,
  <Settlement name='Sunshine Tidings Co-op' plotTypes={plotTypes} plots={[]} nonPlots={[]} />,
  <Settlement name='Taffington Boathouse' plotTypes={plotTypes} plots={[]} nonPlots={[]} />,
  <Settlement name='Tenpines Bluff' plotTypes={plotTypes} plots={[]} nonPlots={[]} />,
  <Settlement name='Warwick Homestead' plotTypes={plotTypes} plots={[]} nonPlots={[]} />,
];

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
