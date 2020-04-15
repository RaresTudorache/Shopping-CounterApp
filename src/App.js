import React, {Component} from 'react';
import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters';

class App extends Component {

  state = { 
    counters: [
        {id:1, value: 3},
        {id:2, value: 0},
        {id:3, value: 0},
        {id:4, value: 0}
    ]
 };
//instead of deleting a counter, create a new counters array without that specific counter
handleDelete = counterId =>{
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters: counters});
};

handleIncrements = counter =>{ // we can use this approch for binding event handlers
    const counters =[...this.state.counters]; //cloning the original array
    const index = counters.indexOf(counter);
    counters[index] = {...counter}; //clone our first coutner with the function input
    counters[index].value++;
    this.setState({counters : counters});
}

handleDecrements = counter =>{
    const counters =[...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--;
    this.setState({counters:counters});
}


handleReset = () => {
   const counters =  this.state.counters.map(counter => {
        counter.value = 0;
        return counter;
});
this.setState({counters:counters});
};

  render() { 
    return (
      <React.Fragment>
      <NavBar 
      //display on the navBar total nr of counters with value larger than 0
      totalCounters = {this.state.counters.filter(c => c.value>0).length}/>
      <main className="container">
        <Counters onReset= {this.handleReset}
        counters = {this.state.counters}
        onIncrement = {this.handleIncrements}
        onDelete = {this.handleDelete}
        onDecrement ={this.handleDecrements}/>
      </main>
      </React.Fragment>
    );
  }
}
 

export default App;
