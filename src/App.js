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
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false,
      tasks: [
        { title: 'teste 1', description: 'lorem ipsum dollar', date: '12/12/1212', status: true },
        { title: 'teste 2', description: 'lorem ipsum dollar', date: '12/12/1212', status: true },
        { title: 'teste 3', description: 'lorem ipsum dollar', date: '12/12/1212', status: true },
        { title: 'teste 4', description: 'lorem ipsum dollar', date: '12/12/1212', status: true },
        { title: 'teste 5', description: 'lorem ipsum dollar', date: '12/12/1212', status: true },
      ],
      taskAttr: ''
    }

    this.createTask = this.createTask.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  newTask(event) {
    let task = {
      title: event.target.title.value,
      description: event.target.description.value,
      date: event.target.title.date,
      status: true
    }

    return task;
  }

  createTask(event) {
    event.preventDefault();
    this.setState({ taskAttr: '' });
    let tasks = [...this.state.tasks]
    let position = event.target.position.value;
    if (position !== -1) {
      tasks[position] = this.newTask(event);
      this.setState({ tasks: tasks });
      this.closeModal();
    } else {
      if (tasks.unshift(this.newTask(event)) !== -1) {
        alert('Tarefa adicionada com sucesso');
        this.setState({ tasks: tasks });
        this.closeModal();
      }
    }
  }

  editTask(task, event) {
    this.setState({ taskAttr: task });
    this.setState({ modalIsOpen: true });
  }

  delete(task, event) {
    let tasks = [...this.state.tasks];
    let position = tasks.indexOf(task);
    if (position !== -1) {
      if (window.confirm('Deseja realmente deletar esta tarefa?')) {
        tasks.splice(position, 1);
        this.setState({ tasks: tasks });
      }
    }
  }

  changeStatus(event) {
    event.preventDefault();
    console.log("Mudando Status...")
  }

  render() {
    return (
      <div className="App">
        <Header title="Gerenciador de Projetos" />
        <div className="Tasks row">
          {this.state.tasks.map((task, index) => {
            return <Task
              value={task}
              key={index}
              className={"col-xs-12 col-sm-8 col-md-6 col-lg-4"}
              edit={this.editTask.bind(this, task)}
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
          <form onSubmit={this.createTask}>
            <div>
              <label htmlFor="title">Título</label>
              <input name="title" type="text" defaultValue={this.state.taskAttr.title} />
            </div>
            <div>
              <label htmlFor="date">Data</label>
              <input name="date" type="text" defaultValue={this.state.taskAttr.date} />
            </div>
            <div>
              <label htmlFor="date">Descrição</label>
              <textarea name="description" defaultValue={this.state.taskAttr.description}></textarea>
            </div>
            <div>
              <input name="position" type="text" defaultValue={this.state.tasks.indexOf(this.state.taskAttr)} />
              <input type="submit" value="Salvar" />
            </div>
          </form>
        </Modal>

      </div>
    );
  }
}

export default App;
