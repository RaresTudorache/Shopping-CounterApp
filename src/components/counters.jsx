import React, { Component } from 'react';
import Counter from './counter';


class Counters extends Component {
    
    render() { 
        return (
          <div>
              {this.props.counters.map(counter=>
              <Counter 
              key={counter.id} 
              onDelete={this.props.onDelete}
              counter={counter}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}>
              </Counter>
              )}
              <button onClick={this.props.onReset} className="btn btn-danger btn-sm m-2">Reset</button>
          </div>

          );
    }
}
 
export default Counters;