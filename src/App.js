import React, { Component } from 'react';
import Header from './components/header';
import Task from './components/task';
import Button from './components/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-modal';
import './App.css';
import '../node_modules/flexboxgrid/css/flexboxgrid.min.css'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      modalIsOpen: false,
      tasks: [
        {id: 1, title: 'teste 1', description: 'lorem ipsum dollar', date: '12/12/1212', status: true},
        {id: 2, title: 'teste 2', description: 'lorem ipsum dollar', date: '12/12/1212', status: true},
        {id: 3, title: 'teste 3', description: 'lorem ipsum dollar', date: '12/12/1212', status: true},
        {id: 4, title: 'teste 4', description: 'lorem ipsum dollar', date: '12/12/1212', status: true},
        {id: 5, title: 'teste 5', description: 'lorem ipsum dollar', date: '12/12/1212', status: true},        
      ]
    }
    this._new = this._new.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  _new(event){
    event.preventDefault();
    console.log("Criando...")
  }

  edit(){
    this.setState({modalIsOpen: true});
  }

  delete(task, event){
    let tasks = [...this.state.tasks];
    let position = tasks.indexOf(task)
    if (position !== -1) {
      if (window.confirm('Deseja realmente deletar esta tarefa?')){
        tasks.splice(position, 1);
        this.setState({tasks: tasks});
      }      
    }
  }

  changeStatus(event){
    event.preventDefault();
    console.log("Mudando Status...")
  }

  render(){
    return (
      <div className="App">
        <Header title="Gerenciador de Projetos" />
        <div className="Tasks row">
          {this.state.tasks.map((task) => {
            return <Task 
              value={task}
              className="col-xs-12 col-sm-8 col-md-6 col-lg-4" 
              edit={this.edit.bind(this)}
              delete={this.delete.bind(this, task)}
              status={this.changeStatus.bind(this)}
            />  
          })}
        </div>
        <div className="buttonAdd">   
          <Button value={
            <FontAwesomeIcon 
              icon={faPlus} 
              className='plusIcon'
            />
          } onClick={this.openModal} />
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          className="Modal"
          overlayClassName="Overlay"
        >
          <div className="buttomCloseModal">
            <button onClick={this.closeModal}>
              <FontAwesomeIcon 
                icon={faTimes}
              />
            </button>
          </div>
          <h2 ref={subtitle => this.subtitle = subtitle}>Adicionar Tarefa</h2>
          <br />
          <form>
            <div>
              <label for="title">Título</label>
              <input name="title" type="text" />
            </div>
            <div>
              <label for="date">Data</label>
              <input name="date" type="text" />
            </div>
            <div>
              <label for="date">Descrição</label>
              <textarea></textarea>
            </div>
            <div>
              <input type="submit" value="Salvar" />
            </div>
          </form>
        </Modal>

      </div>
    );
  }
}

export default App;
