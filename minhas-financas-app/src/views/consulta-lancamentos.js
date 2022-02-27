import React from 'react'
import {withRouter} from 'react-router-dom'

import Card from '../Components/card'
import FormGroup from '../Components/form-group'

class ConsultaLancamentos extends React.Component{

    render(){
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
                                
                            </FormGroup>
                        </div>
                    </div>
                </div>
            </Card>

        )
    }

}

export default withRouter(ConsultaLancamentos);