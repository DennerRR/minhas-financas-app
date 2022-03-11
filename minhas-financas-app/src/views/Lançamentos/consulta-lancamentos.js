import React from 'react'
import { withRouter } from 'react-router-dom'

import Card from '../../Components/card'
import FormGroup from '../../Components/form-group'
import SelectMenu from '../../Components/selectMenu'
import LancamentosTable from './lancamentosTable'

import LancamentoService from '../../app/service/lancamentoService'
import LocalStorageService from '../../app/service/localStorageService'


class ConsultaLancamentos extends React.Component{

    state = {
        ano:'',
        mes:'',
        tipo:'',
        descricao:'',
        lancamentos: []
    }

    constructor(){
        super()
        this.service = new LancamentoService()
    }
    buscar = () =>{
        const usuarioLogado = LocalStorageService.obterItem('_usuario_logado')

       const LancamentoFiltro ={
           ano:this.state.ano,
           mes: this.state.mes,
           tipo: this.state.tipo,
           descricao: this.state.descricao,
           usuario: usuarioLogado.id
       }
       this.service
       .consultar(LancamentoFiltro)
       .then( resposta =>{
           this.setState({lancamentos: resposta.data})
       }).catch(error =>{
           console.log(error)
       })
    }

    render(){

        
        const meses = this.service.obterListaMeses();

        const tipos = this. service.obterListaTipos();
        
        return(
            <Card title="Consulta Lançamentos">
                <div className="row">
                    <div className="col-md-6">
                        <div className="bs-component">
                            <FormGroup htmlFor="inputAno" Label="Ano: *">
                                <input type="text" 
                                       className="form-control" 
                                       id ="inputAno"
                                       value={this.state.ano}
                                       onChange={e => this.setState({ano: e.target.value})}
                                       placeholder="Digite o Ano"/>
                            </FormGroup>

                            <FormGroup htmlFor="inputMes" Label="Mês: ">
                                <SelectMenu id="inputMes" 
                                            className="form-control"
                                            value={this.state.mes}
                                            onChange={e => this.setState({mes: e.target.value})} 
                                            lista={meses} />
                            </FormGroup>
                            
                            <FormGroup htmlFor="inputDesc" Label="Descrição: ">
                                <input type="text" 
                                       className="form-control" 
                                       id ="inputDesc"
                                       value={this.state.descricao}
                                       onChange={e => this.setState({descricao: e.target.value})}
                                       placeholder="Digite a descrição"/>
                            </FormGroup>

                            <FormGroup htmlFor="inputTipo" Label="Tipo Lançamento: ">
                                <SelectMenu id="inputTipo" 
                                            value={this.state.tipo}
                                            onChange={e => this.setState({tipo: e.target.value})}
                                            className="form-control"   
                                            lista={tipos}/>
                            </FormGroup>
                            <br/>
                            <button onClick={this.buscar} type="button" className="btn btn-success">Buscar</button>
                            <button type="button" className="btn btn-danger">Cadastrar</button>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-12">
                        <div className="bs-component">
                            <LancamentosTable Lancamentos={this.state.lancamentos}/>
                        </div>
                    </div>
                </div>
            </Card>

        )
    }

}

export default withRouter(ConsultaLancamentos);