import React, { Component } from 'react';
import './index.css';
import './flexboxgrid.min.css';

class Index extends Component {
  constructor(props){
    super(props)
    this.state = {
      list: [
        {title: 'teste', date: '12/12/1212', status: true},
        {title: 'teste', date: '12/12/1212', status: true},
        {title: 'teste', date: '12/12/1212', status: true},
        {title: 'teste', date: '12/12/1212', status: true},
        {title: 'teste', date: '12/12/1212', status: true},        
      ]
    }
  }

  render() {
    return (
      <div className="row">
        {this.state.list.map((item, index) => {
          return (
            <div className="col-xs-12 col-sm-8 col-md-6 col-lg-4">
              <div className="task">
                <h1>Sistema Acadêmico</h1>
                {/* <p><b>Início:</b> 20/12/2020</p>
                <p><b>Entrega:</b> 20/12/2020</p> */}
                <p className="taskDescription">Adicionar botão editar para taferas do projeto</p>
                <button className="_button">Editar</button>
                <button className="_button">Excluir</button>
                <button className="_button">Concluir</button>
              </div>
            </div>   
          )
        })}
      </div>
    );
  }
}

export default Index;