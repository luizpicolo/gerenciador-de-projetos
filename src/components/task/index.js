import React, { Component } from 'react';
import Buttom from '../button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash, faPen } from '@fortawesome/free-solid-svg-icons'
import './index.css';

class Task extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className={this.props.className}>
        <div className="task">
          <h1>Sistema Acadêmico 2</h1>
          <p className="taskDescription">Adicionar botão editar para taferas do projeto</p>
          <div className="buttonActions">
            <Buttom title="Finalizar tarefa" value={
              <FontAwesomeIcon
                icon={faCheck}
                className='plusIcon'
              />
            } onClick={this.props.status} />
            <Buttom title="Excluir tarefa" value={
              <FontAwesomeIcon
                icon={faTrash}
                className='plusIcon'
              />
            } onClick={this.props.delete} />
            <Buttom title="Editar tarefa" value={
              <FontAwesomeIcon
                icon={faPen}
                className='plusIcon'
              />
            } onClick={this.props.edit} />
          </div>
        </div>
      </div>
    );
  }
}

export default Task;