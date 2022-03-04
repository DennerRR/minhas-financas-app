import React from 'react'
import { withRouter } from 'react-router-dom'

import Card from '../../Components/card'
import FormGroup from '../../Components/form-group'
import SelectMenu from '../../Components/selectMenu'
import LancamentosTable from './lancamentosTable'

class ConsultaLancamentos extends React.Component{

    render(){
        const meses = [
            {Label: 'Selecione...', value: ''},
            {Label: 'Janeiro', value: 1},
            {Label: 'Fevereiro', value: 2},
            {Label: 'Março', value: 3},
            {Label: 'Abril', value: 4},
            {Label: 'Maio', value: 5},
            {Label: 'Junho', value: 6},
            {Label: 'Julho', value: 7},
            {Label: 'Agosto', value: 8},
            {Label: 'Setembro', value: 9},
            {Label: 'Outubro', value: 10},
            {Label: 'Novembro', value: 11},
            {Label: 'Dezembro', value: 12}
            
        ]
        const tipos = [
            {Label: 'Selecione...', value: ''},
            {Label: 'Despesa', value: 'DESPESA'},
            {Label: 'Receita', value: 'RECEITA'}
            
        ]
        const lancamentos=[
            {id: 1,descricao:'Salário', valor: 5000, mes: 1, tipo: 'Receita', status: 'Efetivado'}
        ]
        return(
            <Card title="Consulta Lançamentos">
                <div className="row">
                    <div className="col-md-6">
                        <div className="bs-component">
                            <FormGroup htmlFor="inputAno" Label="Ano: *">
                                <input type="text" 
                                       className="form-control" 
                                       id ="InputAno"
                                       aria-describedby="emailHelp"
                                       placeholder="Digite o Ano"/>
                            </FormGroup>

                            <FormGroup htmlFor="inputMes" Label="Mês: ">
                                <SelectMenu id="inputMes" className="form-control" lista={meses} />
                            </FormGroup>

                            <FormGroup htmlFor="inputTipo" Label="Tipo Lançamento: ">
                                <SelectMenu id="inputTipo" className="form-control" lista={tipos}/>
                            </FormGroup>
                            <br/>
                            <button type="button" className="btn btn-success">Buscar</button>
                            <button type="button" className="btn btn-danger">Cadastrar</button>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-12">
                        <div className="bs-component">
                            <LancamentosTable lancamentos={lancamentos}/>
                        </div>
                    </div>
                </div>
            </Card>

        )
    }

}

export default withRouter(ConsultaLancamentos);