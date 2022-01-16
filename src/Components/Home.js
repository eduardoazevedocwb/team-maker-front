import React from 'react'
import "../assets/web/assets/mobirise-icons2/mobirise2.css";
import "../assets/web/assets/mobirise-icons/mobirise-icons.css";
import "../assets/animatecss/animate.css";
import "../assets/dropdown/css/style.css";
import "../assets/socicon/css/styles.css";
import "../assets/theme/css/style.css";
import "../assets/mobirise/css/mbr-additional.css";
import "../assets/mobirise/css/mbr-additional.css";


import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/fonts/Roboto/Roboto-Regular.ttf";

import iconLogo from '../assets/images/team.png';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import TeamList from './TeamList';
import PlayerForm from './PlayerForm';
import TeamForm from './TeamForm';
import TeamCard from './TeamCard';

export default class Home extends React.Component {
    state = {
        obj: ""
    }

    componentDidMount() {}

    render() {
        return (
            <div>
                {/* Menu top */}
                <section data-bs-version="5.1" className="menu cid-s48OLK6784" id="top">
                    <nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg" style={{backgroundImage:"linear-gradient(to left, #4B086D, #ACC0FE)"}}>
                        <div className="container">
                            <div className="navbar-brand">
                                <span className="navbar-logo">
                                    <a href="https://url.home">
                                        <img src={iconLogo} alt="Team-maker" style={{ height: '8rem' }} />
                                    </a>
                                </span>
                                <span className="navbar-caption-wrap">
                                    <a className="navbar-caption display-7" href="https://mobiri.se" style={{color:"#4B086D"}}>
                                        Soccer team maker</a></span>
                            </div>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
                                    <li className="nav-item">
                                        <a className="nav-link link text-black display-4">
                                            <AnchorLink href='#teams' style={{color:"black"}}>
                                                <strong>Campeonatos</strong>
                                            </AnchorLink>
                                        </a>        
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link link text-black display-4">
                                            <AnchorLink href='#teams' style={{color:"black"}}>
                                                <strong>Times</strong>
                                            </AnchorLink>
                                        </a>        
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link link text-black display-4">
                                            <AnchorLink href='#teams' style={{color:"black"}}>
                                                <strong>Jogadores</strong>
                                            </AnchorLink>
                                        </a>        
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </section>
                {/* Info */}
                <section data-bs-version="5.1" className="features12 cid-sUBZswmuNW" id="features13-v" style={{ paddingTop: '18%' }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-6">
                                <div className="card-wrapper">
                                    <div className="card-box align-left">
                                        <h4 className="card-title mbr-fonts-style mb-4 display-2">
                                            <strong>Seja bem vindo(a)</strong>
                                        </h4>
                                        <p className="mbr-text mbr-fonts-style mb-4 display-7">
                                            Cadastre jogadores, times e campeonatos. Utilizando de um sistema de sugestão de time equilibrado no momento do cadastro do novo campeonato.</p>
                                        <div className="mbr-section-btn"><a className="btn btn-primary display-4" href="https://mobiri.se">
                                            Criar campeonato</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <AnchorLink href='#formPlayer' style={{color:"black"}}>
                                    <div className="item mbr-flex">
                                        <div className="icon-box">
                                            <span className="mbr-iconfont mobi-mbri-user mobi-mbri" />
                                        </div>
                                        <div className="text-box">
                                            <h4 className="icon-title mbr-black mbr-fonts-style display-7">                                            
                                                <strong>Cadastre jogadores</strong>
                                            </h4>
                                            <h5 className="icon-text mbr-black mbr-fonts-style display-4">Cadastre os jogadores e suas posições, considerando faixa de idade.</h5>
                                        </div>
                                    </div>
                                </AnchorLink>
                                <AnchorLink href='#formTeam' style={{color:"black"}}>
                                    <div className="item mbr-flex">
                                        <div className="icon-box">
                                            <span className="mbr-iconfont mobi-mbri-users mobi-mbri" />
                                        </div>
                                        <div className="text-box">
                                            <h4 className="icon-title mbr-black mbr-fonts-style display-7">
                                                <strong>Cadastre times</strong>
                                            </h4>
                                            <h5 className="icon-text mbr-black mbr-fonts-style display-4">Cadastro de times, contendo um capitão por time.</h5>
                                        </div>
                                    </div>
                                </AnchorLink>
                                <div className="item mbr-flex">
                                    <div className="icon-box">
                                        <span className="mbr-iconfont mobi-mbri-user-2 mobi-mbri" />
                                    </div>
                                    <div className="text-box">
                                        <h4 className="icon-title mbr-black mbr-fonts-style display-7">
                                            <strong>Consulte os captões</strong>
                                        </h4>
                                        <h5 className="icon-text mbr-black mbr-fonts-style display-4">Consulte os times e capitões já cadastrados, quem sabe você jogador pode fazer parte de um destes times.</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Teams */}
                <section data-bs-version="5.1" className="team1 cid-sUBZfohhde" id='teams'>
                    <TeamList />
                </section>
                {/* Cards teams */}
                <section data-bs-version="5.1" className="cardsTeams cid-sUBZfohhde" id='cardsTeams'>
                    <TeamCard />
                </section>
                {/* Form Player */}
                <section data-bs-version="5.1" className="form5 cid-sUBW6ZtNje" id="formPlayer">
                    <PlayerForm />
                </section>
                {/* Form Team */}
                <section data-bs-version="5.1" className="form5 cid-sUBW6ZtNje" id="formTeam">
                    <TeamForm />
                </section>
                <AnchorLink href='#top'>
                    <div id="scrollToTop" className="scrollToTop mbr-arrow-up"><a style={{ textAlign: 'center' }}>
                        <i className="mbr-arrow-up-icon mbr-arrow-up-icon-cm cm-icon cm-icon-smallarrow-up" /></a></div>
                    <input name="animation" type="hidden" />
                </AnchorLink>

            </div>
        );
    }
}