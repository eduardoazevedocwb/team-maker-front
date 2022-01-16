import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import player1 from '../assets/images/player1.jpg'

export default class PlayerList extends React.Component {
    state = {
        obj: ""
    }

    componentDidMount() {}
    render(){
        return (
            <div>
                {/* Accordion Players */}
                <Accordion defaultActiveKey={['0']}  flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Marks Henrique</Accordion.Header>
                        <Accordion.Body>
                            {/* Team card */}
                            <div className='row'>
                                <div className='col-lg-2'>
                                    <img src={player1} style={{maxHeight:"150px",maxWidth:"100px"}}/>
                                </div>
                                <div className='col-lg-10'>
                                    <strong>Marks Henrique</strong>
                                    <p> Capitão Hugo Fernandes. <br/>
                                        Capitão Hugo Fernandes. <br/>
                                        Capitão Hugo Fernandes. <br/> 
                                        Capitão Hugo Fernandes. 
                                    </p>
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