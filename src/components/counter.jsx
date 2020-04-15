import React, { Component } from 'react';


class Counter extends Component {

    //styles is for styling buttons in care you don't want to use the bootstrap libraries
    styles = {
        fontSize: 50,
        fontWeight: "bold"
    };

    render() { //press ctrl D to change multiple occurrences at the same time
        console.log(this.props);
        return (
        <div> 
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-success btn-sm">Increment</button>
        <button onClick={()=>this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm m-2">Dicrement</button>
        <button onClick={()=>this.props.onDelete(this.props.counter.id)} className = "btn btn-danger btn-sm m-2">Delete</button>
        </div>
        );}

     //this method is for rederring Tags
    renderTags(){
        if(this.state.tags.length === 0) return <p>No tags</p>;
            
        return  <ul> {this.state.tags.map(tag => <li key ={tag}>{tag}</li>) }</ul>;
     }
         
    //this is for styling objects - by using bootstrap libraries 
    getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += (this.props.counter.value === 0) ? "badge-warning" : "badge-primary";
        return classes;
    }
    //this is for dynamically change the count variable
    formatCount(){
        const {value: count} = this.props.counter;
        return count === 0 ? <h1>0</h1> : <h1>{count}</h1>;
    }
}
 
export default Counter;