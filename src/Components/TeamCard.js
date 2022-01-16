import React from 'react';
import imgTeam1 from '../assets/images/team1.png';
import imgTeam2 from '../assets/images/team2.png';
import imgTeam3 from '../assets/images/team3.png';
import imgTeam4 from '../assets/images/team4.png';

export default class TeamCard extends React.Component {
    state = {
        obj: ""
    }

    componentDidMount() {}
    render(){
        return (
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h3 className="mbr-section-title mbr-fonts-style align-center mb-4 display-2">
                        <strong>Últimas seleções cadastradas</strong>
                    </h3>
                </div>
                {/* team 1 */}
                <div className="col-sm-6 col-lg-2" >
                    <div className="card-wrap">
                        <div className="image-wrap">
                            <img src={imgTeam1} />
                        </div>
                        <div className="content-wrap">
                            <h2 className="mbr-role mbr-fonts-style align-center mb-3 display-4">
                                <strong>Bayern de Munique</strong>
                            </h2>
                            <p className="card-text mbr-fonts-style align-center display-7">
                                Capitão Hugo Fernandes.
                            </p>
                        </div>
                    </div>
                </div>
                {/* team 2 */}
                <div className="col-sm-6 col-lg-2">
                    <div className="card-wrap">
                        <div className="image-wrap">
                            <img src={imgTeam2} />
                        </div>
                        <div className="content-wrap">
                            <h2 className="mbr-role mbr-fonts-style align-center mb-3 display-4">
                                <strong>Borussia Dortmund</strong>
                            </h2>
                            <p className="card-text mbr-fonts-style align-center display-7">
                                Capitão Gustavo Souza.
                            </p>
                        </div>
                    </div>
                </div>
                {/* team 3 */}
                <div className="col-sm-6 col-lg-2">
                    <div className="card-wrap">
                        <div className="image-wrap">
                            <img src={imgTeam3} />
                        </div>
                        <div className="content-wrap">
                            <h2 className="mbr-role mbr-fonts-style align-center mb-3 display-4">
                                <strong>Barcelona</strong>
                            </h2>
                            <p className="card-text mbr-fonts-style align-center display-7">
                                Capitão Pedro Guimarães.
                            </p>
                        </div>
                    </div>
                </div>
                {/* team 4 */}
                <div className="col-sm-6 col-lg-2">
                    <div className="card-wrap">
                        <div className="image-wrap">
                            <img src={imgTeam4} />
                        </div>
                        <div className="content-wrap">
                            <h2 className="mbr-role mbr-fonts-style align-center mb-3 display-4">
                                <strong>Real Madrid</strong>
                            </h2>
                            <p className="card-text mbr-fonts-style align-center display-7">
                                Capitão Ulisses Moura.
                            </p>
                        </div>
                    </div>
                </div>
                {/* team 5 */}
                <div className="col-sm-6 col-lg-2">
                    <div className="card-wrap">
                        <div className="image-wrap">
                            <img src={imgTeam1} />
                        </div>
                        <div className="content-wrap">
                            <h2 className="mbr-role mbr-fonts-style align-center mb-3 display-4">
                                <strong>Bayern de Munique</strong>
                            </h2>
                            <p className="card-text mbr-fonts-style align-center display-7">
                                Capitão Henrique Souza.
                            </p>
                        </div>
                    </div>
                </div>
                {/* team 6 */}
                <div className="col-sm-6 col-lg-2">
                    <div className="card-wrap">
                        <div className="image-wrap">
                            <img src={imgTeam2} />
                        </div>
                        <div className="content-wrap">
                            <h2 className="mbr-role mbr-fonts-style align-center mb-3 display-4">
                                <strong>Borussia Dortmund</strong>
                            </h2>
                            <p className="card-text mbr-fonts-style align-center display-7">
                                Capitão Brendon Oliveira.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        );
    }
}