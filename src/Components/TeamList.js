import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import imgTeam1 from '../assets/images/team1.png';
import imgTeam2 from '../assets/images/team2.png';
import imgTeam3 from '../assets/images/team3.png';
import imgTeam4 from '../assets/images/team4.png';
import PlayerList from './PlayerList';

export default class TeamList extends React.Component {
    state = {
        obj: ""
    }

    componentDidMount() {}
    render(){
        return (
            <div className='container'>
            <div className="col-12">
                <h3 className="mbr-section-title mbr-fonts-style align-center mb-4 display-2">
                    <strong>Lista de times cadastrados</strong>
                </h3>
            </div>
            {/* Accordion Team */}
            <Accordion defaultActiveKey={['0']}  flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Bayer de Munique</Accordion.Header>
                <Accordion.Body>
                    {/* Team card */}
                    <div className='row'>
                        <div className='col-lg-2'>
                            <img src={imgTeam1} style={{maxHeight:"200px",maxWidth:"150px"}}/>
                        </div>
                        <div className='col-lg-2'>
                            <strong>Bayern de Munique</strong>
                            <p> Capitão Hugo Fernandes. </p>
                        </div>
                        <div className='col-lg-8'>
                            <PlayerList/>
                        </div>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </div>
        );
    }
}