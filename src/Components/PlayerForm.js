import React from 'react';

export default class PlayerForm extends React.Component {
    state = {
        obj: ""
    }

    componentDidMount() {}
    render(){
        return (
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
        );
    }
}