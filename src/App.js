import React, { Component } from 'react';
import Header from './components/header';
import Task from './components/task';
import Button from './components/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
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

//Modal.setAppElement('#yourAppElement')

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      modalIsOpen: false,
      list: [
        {title: 'teste', date: '12/12/1212', status: true},
        {title: 'teste', date: '12/12/1212', status: true},
        {title: 'teste', date: '12/12/1212', status: true},
        {title: 'teste', date: '12/12/1212', status: true},
        {title: 'teste', date: '12/12/1212', status: true},        
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
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  _new(event){
    event.preventDefault();
    console.log("Criando...")
  }

  edit(event){
    event.preventDefault();
    console.log("Editando...")
  }

  delete(event){
    event.preventDefault();
    console.log("Deletando...")
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
          {this.state.list.map(() => {
            return <Task 
              className="col-xs-12 col-sm-8 col-md-6 col-lg-4" 
              edit={this.edit.bind(this)}
              delete={this.delete.bind(this)}
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
          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>

      </div>
    );
  }
}

export default App;
