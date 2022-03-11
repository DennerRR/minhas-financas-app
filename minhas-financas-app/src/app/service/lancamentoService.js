import ApiService from '../apiservice'


export default class LancamentoService extends ApiService{
    
    constructor(){
        super('/api/lancamentos')
    }

    obterListaMeses(){
        return [
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
    }

    obterListaTipos(){
        return [
            {Label: 'Selecione...', value: ''},
            {Label: 'Despesa', value: 'DESPESA'},
            {Label: 'Receita', value: 'RECEITA'}
        ]
    }
    
    consultar (LancamentoFiltro){
        let params = `?ano=${LancamentoFiltro.ano}`

        if(LancamentoFiltro.mes){
            params = `${params}&mes=${LancamentoFiltro.mes}`
        }

        if(LancamentoFiltro.tipo){
            params = `${params}&tipo=${LancamentoFiltro.tipo}`
        }
        if(LancamentoFiltro.status){
            params = `${params}&status=${LancamentoFiltro.status}`
        }
        if(LancamentoFiltro.usuario){
            params =`${params}&usuario=${LancamentoFiltro.usuario}`

        }
        if(LancamentoFiltro.descricao){
            params =`${params}&descricao=${LancamentoFiltro.descricao}`

        }
        
        return this.get(params)
    }
}