import React from 'react';

export default class TeamForm extends React.Component {
    state = {
        obj: ""
    }

    componentDidMount() {}
    render(){
        return (
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
        );
    }
}