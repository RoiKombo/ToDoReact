import React, { Component } from 'react'
import './App.css';
import AddItemForm from './components/AddItemForm';
import TodoItem from '../src/components/TodoItem';

export default class App extends Component {
  state = {
    items: {},
  }
  addItem = item => {
    //make a copy of the existing state
    const items = {...this.state.items};
    //add new item to the item variable
    items[`item${Date.now()}`] = item;
    //set the new items object to state
    this.setState(
      { items })
  }
  render() {
    return (
      <div>
        <AddItemForm addItem={this.addItem}/>
        <ul>
          {Object.keys(this.state.items).map(key => <TodoItem key={key} details={this.state.items[key]}/>)}
        </ul>
      </div>
    )
  }
}
