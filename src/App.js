import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props) 
    this.state = {
      title: 'React.js Simple Crud',
      act: 0,
      index: '',
      datas : []
    }
  }
  componentDidMount() {
    this.refs.name.focus()
    this.refs.addres.focus()
  }
  fsubmit =(e) => {
    //console.log('try')

    let datas = this.state.datas
    let name = this.refs.name.value;
    let addres = this.refs.addres.values;

    if(this.state.act === 0) {
      let data = {
        name, addres // new
      }
      datas.push(data);
    }else {
        let index = this.state.index
        datas[index].name= name;
        datas[index].addres = addres;
    }

    this.setState({
      datas: datas,
      act: 0
    })

    this.refs.myForm.reset()
    this.refs.name.focus()
  }

  fremove = (i) => {
    let datas = this.state.datas
    datas.splice(i,1)
    this.setState({
      datas:datas
    })
    this.refs.myForm.reset()
    this.refs.name.focus()
  }

  fEdit = (i) => {
    let data = this.state.datas[i]
    this.refs.name.value = data.name;
    this.refs.addres.value = data.addres;

    this.setState = ({
      act:1,
      index: i
    })
    this.refs.name.focus()
  }

  render() {
    const datas  = this.state.datas

    return (
      <div className="App">
       <h1>{this.state.title}</h1>
         <form action ref="myForm" className="myForm">
           <input type="text" ref="name" placeholder="Input Your Name" className="formField" /> 
           <input type="text" ref="addres" placeholder="Input Address" className="formField" />
           <button onClick={this.fsubmit} className="mybutton"> Submit </button>
         </form>
         <pre>
            {datas.map((data, i) =>
              <li key={i} className="myList">
                {i+1}. {data.name}, {data.addres}
                <button onClick={()=> this.fremove(i)} className="myButton" > Remove</button>
                <button onClick={() => this.fEdit(i)} className="myButton"> Edit</button>
              </li>
            )}
         </pre>
      </div>
    );
  }
}

export default App;
