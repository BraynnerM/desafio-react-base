import {Component} from 'react'
class Text extends Component{
    constructor(){
        super()
        this.state = {
            style:{color:"black",textTransform:"none"}
        }
    }

    render(){
        return(
            <>
                <h2>Desafio 1 - Colorir e deixar maiúsculo um texto | Desafio 2 - Gerar alerta informando a label do botão ao clica-lo</h2>           
                <textarea style={this.state.style} placeholder="Digite ou cole seu texto aqui" rows="15" cols="70"></textarea>            
                <button onClick={() => this.setState({style:{color:"red",textTransform:"uppercase"}})}>
                    Clique aqui para colorir e deixar maiúsculo
                </button>
            </>
        )
    }
}

export default Text
