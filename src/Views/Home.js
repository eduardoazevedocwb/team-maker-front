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
import imgTeam1 from '../assets/images/team1.png';
import imgTeam2 from '../assets/images/team2.png';
import imgTeam3 from '../assets/images/team3.png';
import imgTeam4 from '../assets/images/team4.png';
import player1 from '../assets/images/player1.jpg'

import AnchorLink from 'react-anchor-link-smooth-scroll'
import Accordion from 'react-bootstrap/Accordion'

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
                    <div className='container'>
                        
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
                        


                    {/* <div className='container'>
                        <ul class="list-group">
                            <li class="list-group-item">
                                <div className="card-wrap">
                                    <div className='row' style={{maxHeight:"100px"}}>
                                        <div className='col-lg-6'>
                                            <img src={imgTeam1} style={{maxHeight:"120px",maxWidth:"70px"}}/>
                                        </div>
                                        <div className='col-lg-6'>
                                            <strong>Bayern de Munique</strong>
                                            <p> Capitão Hugo Fernandes. <br/>
                                                Capitão Hugo Fernandes. <br/>
                                                Capitão Hugo Fernandes. <br/> 
                                                Capitão Hugo Fernandes. 
                                            </p>
                                        </div>
                                    </div>


                                </div>
                            </li>
                            <li class="list-group-item">
                                A second item
                            </li>
                            <li class="list-group-item">
                                A third item    
                            </li>
                            <li class="list-group-item">
                                A fourth item
                            </li>
                            <li class="list-group-item">
                                And a fifth one
                            </li>
                        </ul>
                    </div> */}
                    
                    {/* Cards teams */}
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
                </section>
                {/* Form Player */}
                <section data-bs-version="5.1" className="form5 cid-sUBW6ZtNje" id="formPlayer">
                    <div className="container">
                        <div className="mbr-section-head">
                            <h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                                <strong>Cadastre-se como jogador</strong>
                            </h3>
                        </div>
                        <div className="row justify-content-center mt-4">
                            <div className="col-lg-8 mx-auto mbr-form" data-form-type="formoid">
                                <form action="https://mobirise.eu/" method="POST" className="mbr-form form-with-styler" data-form-title="Form Name"><input type="hidden" name="email" data-form-email="true" defaultValue="cNKMEDd7F1fymRd4HabZuv7KywaOQSA0rcefyrc1K/KtYz2MQBaaWpndZcd8ImJSNBFNeIT9UqK/zpVmjvtlozLDy4ZLNwiMmkIvTRJ+U7/NstMu2Gi3b5bj2hGDbXJp" />
                                    {/* Alert */}
                                    <div className="row">
                                        <div hidden="hidden" data-form-alert className="alert alert-success col-12">Você foi cadastrado(a) com sucesso!</div>
                                        <div hidden="hidden" data-form-alert-danger className="alert alert-danger col-12">Algo deu errado, não foi possível realizar o cadastro!</div>
                                    </div>
                                    {/* Form */}
                                    <div className="dragArea row">
                                        <div className="col-lg-6 col-sm-12 form-group mb-3" data-for="name">
                                            <input type="text" name="name" placeholder="Nome" data-form-field="name" className="form-control" defaultValue={""} />
                                        </div>
                                        <div className="col-lg-6 col-sm-12 form-group mb-3" data-for="nickname">
                                            <input type="text" name="nickname" placeholder="Apelido" data-form-field="nickname" className="form-control" defaultValue={""} />
                                        </div>                                        
                                        <div className="col-lg-6 col-sm-12 form-group mb-3" data-for="email">
                                            <input type="email" name="email" placeholder="E-mail" data-form-field="email" className="form-control" defaultValue={""} />
                                        </div>
                                        <div className="col-lg-6 col-sm-12 form-group mb-3" data-for="contact">
                                            <input type="text" name="contact" placeholder="Contato" data-form-field="contact" className="form-control" defaultValue={""} />
                                        </div>
                                        <div className="col-lg-12 col-sm-12 form-group mb-3" data-for="address">
                                            <input type="text" name="address" placeholder="Endereço" data-form-field="address" className="form-control" defaultValue={""} />
                                        </div>
                                        <div className="col-lg-6 form-group mb-3" data-for="number">
                                            <input type="text" name="number" placeholder="Número" data-form-field="number" className="form-control" defaultValue={""} />
                                        </div>
                                        <div className="col-lg-6 form-group mb-3" data-for="complement">
                                            <input type="text" name="complement" placeholder="Complemento" data-form-field="complement" className="form-control" defaultValue={""} />
                                        </div>
                                        <div className="col-lg-4 form-group mb-3" data-for="city">
                                            <input type="text" name="city" placeholder="Cidade" data-form-field="city" className="form-control" defaultValue={""} />
                                        </div>
                                        <div className="col-lg-4 form-group mb-3" data-for="state">
                                            <input type="text" name="state" placeholder="Estado" data-form-field="state" className="form-control" defaultValue={""} />
                                        </div>
                                        <div className="col-lg-4 form-group mb-3" data-for="code">
                                            <input type="text" name="code" placeholder="CEP" data-form-field="code" className="form-control" defaultValue={""} />
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 align-center mbr-section-btn">
                                            <button type="submit" className="btn btn-primary display-4">Cadastrar</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                
                </section>
                {/* Form Team */}
                <section data-bs-version="5.1" className="form5 cid-sUBW6ZtNje" id="formTeam">
                    <div className="container">
                        <div className="mbr-section-head">
                            <h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                                <strong>Cadastre seu time</strong>
                            </h3>
                        </div>
                        <div className="row justify-content-center mt-4">
                            <div className="col-lg-8 mx-auto mbr-form" data-form-type="formoid">
                                <form action="https://mobirise.eu/" method="POST" className="mbr-form form-with-styler" data-form-title="Form Name"><input type="hidden" name="email" data-form-email="true" defaultValue="cNKMEDd7F1fymRd4HabZuv7KywaOQSA0rcefyrc1K/KtYz2MQBaaWpndZcd8ImJSNBFNeIT9UqK/zpVmjvtlozLDy4ZLNwiMmkIvTRJ+U7/NstMu2Gi3b5bj2hGDbXJp" />
                                    {/* Alert */}
                                    <div className="row">
                                        <div hidden="hidden" data-form-alert className="alert alert-success col-12">Time cadastrado com sucesso!</div>
                                        <div hidden="hidden" data-form-alert-danger className="alert alert-danger col-12">Algo deu errado, não foi possível realizar o cadastro!</div>
                                    </div>
                                    {/* Form */}
                                    <div className="dragArea row">
                                        <div className="col-lg-12 col-sm-12 form-group mb-3" data-for="name">
                                            <input type="text" name="name" placeholder="Nome do time" data-form-field="name" className="form-control" defaultValue={""} />
                                        </div>
                                        <div className="col-lg-12 col-sm-12 form-group mb-3" data-for="captain">
                                            <input type="text" name="captain" placeholder="Capitão" data-form-field="captain" className="form-control" defaultValue={""} />
                                        </div>
                                        <div className="col-lg-12 col-sm-12 form-group mb-3" data-for="seccaptain">
                                            <input type="text" name="seccaptain" placeholder="Segundo Capitão" data-form-field="seccaptain" className="form-control" defaultValue={""} />
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 align-center mbr-section-btn">
                                            <button type="submit" className="btn btn-primary display-4">Cadastrar</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
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