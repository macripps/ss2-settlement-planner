import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faCity, faSeedling, faShieldAlt, faSmile, faTint } from '@fortawesome/free-solid-svg-icons';

import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table'
import ToggleButton from 'react-bootstrap/ToggleButton'


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

function ClaimedSettlement(props) {
    return (<tr>
            <td><FontAwesomeIcon icon={faCity} style={{color: 'green' }} onClick={(e) => props.unclaimFunc(props.name)} /> {props.name}</td>
            {React.Children.map(props.children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { difficulty: props.difficulty });
                };
            })}
            </tr>);
}

function UnclaimedSettlement(props) {
    return (<tr>
            <td><FontAwesomeIcon icon={faCity} style={{color: 'red' }}  onClick={(e) => props.claimFunc(props.name)} /> {props.name}</td>
            {React.Children.map(props.children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { difficulty: props.difficulty });
                };
            })}
            </tr>);
}

function Settlements(props) {
    console.log(props.unclaimedSettlements);
    var settlements = props.claimedSettlements.map((s) =>
        <ClaimedSettlement key={s.props.name} name={s.props.name} difficulty={props.difficulty} unclaimFunc={props.unclaimFunc}>
            {s}
        </ClaimedSettlement>
    );
    if (props.showUnclaimed) {
        settlements = settlements.concat(props.unclaimedSettlements.map((s) =>
            <UnclaimedSettlement key={s.props.name} name={s.props.name} difficulty={props.difficulty} claimFunc={props.claimFunc}>
                {s}
            </UnclaimedSettlement>
        ));
    }
    settlements = settlements.sort((first, second) => {
        var a = first.props[props.sortBy]
        var b = second.props[props.sortBy]
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        }
        return 0;
    });
    return settlements;
};

class Planner extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          difficulty: ScrapCategories,
          claimedSettlements: [],
          unclaimedSettlements: props.settlements,
          showUnclaimed: true,
      };
    };

    changeDifficulty = (event) => {
      this.setState({difficulty: parseInt(event.target.value)});
    };

    toggleSettlements = (checked) => {
      this.setState({showUnclaimed: checked});
    };

    claimSettlement = (name) => {
        var toClaim = this.state.unclaimedSettlements.find(s => s.props.name === name);
        console.log('Claiming', toClaim);
        if (toClaim) {
            this.setState({
                unclaimedSettlements: this.state.unclaimedSettlements.filter(s => s.props.name !== name),
                claimedSettlements: [...this.state.claimedSettlements, toClaim]
            })
        }
    };

    unclaimSettlement = (name) => {
        var toUnclaim = this.state.claimedSettlements.find(s => s.props.name === name);
        console.log('Unclaiming', toUnclaim);
        if (toUnclaim) {
            this.setState({
                claimedSettlements: this.state.claimedSettlements.filter(s => s.props.name !== name),
                unclaimedSettlements: [...this.state.unclaimedSettlements, toUnclaim]
            })
        }
    }

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
                    <Settlements
                        plotTypes={this.props.plotTypes}
                        difficulty={this.state.difficulty}
                        claimedSettlements={this.state.claimedSettlements}
                        unclaimedSettlements={this.state.unclaimedSettlements}
                        showUnclaimed={this.state.showUnclaimed}
                        claimFunc={this.claimSettlement}
                        unclaimFunc={this.unclaimSettlement}
                        sortBy="name" />
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      );
    };
}

export default Planner;