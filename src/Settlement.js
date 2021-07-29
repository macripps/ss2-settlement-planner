import React from 'react';

const Scrap = 1;
const ScrapCategories = 2;
const ScrapComponents = 3;

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
      var plotUpkeep = props.plotTypes[plot.name].upkeep[plot.level - 1];
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
      var plotUpkeep = props.plotTypes[plot.name].upkeep[plot.level - 1];
      var delta = 0;
      componentsByCategory[props.category].forEach((resource) => {
        delta = delta + (plotUpkeep[resource] || 0) * plot.count;
      })
      upkeep = upkeep + delta;
      details.push(detailString(delta, plot));
    });
    return upkeepCell(props.category, upkeep, details);
  }

class Settlement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plots: props.plots,
            nonPlots: props.nonPlots,
        }
    }

    render() {
        var plots = this.state.plots;
        var resources = ['Food', 'Water', 'Power', 'Safety', 'Happiness', 'Caps', 'Storage'].map(resource => <UpkeepComponent key={resource} plots={plots} resource={resource} plotTypes={this.props.plotTypes} />);
        if (this.props.difficulty === ScrapComponents) {
            resources = resources.concat(tableColumns.map(resource => {
                return <UpkeepComponent key={resource} plots={plots} plotTypes={this.props.plotTypes} resource={resource} />
            }))
        } else if (this.props.difficulty === ScrapCategories) {
            resources = resources.concat(['Building Materials', 'Machine Parts', 'Organic Materials', 'Rare Materials'].map(category => {
                return <UpkeepCategory key={category} plots={plots} plotTypes={this.props.plotTypes} category={category} />
            }))
        } else if (this.props.difficulty === Scrap) {

        }
        return (<React.Fragment>
        {resources}
        </React.Fragment>);
    }
  }

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

export default Settlement;