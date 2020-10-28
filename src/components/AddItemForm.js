import React, { Component, createRef } from 'react'

export default class AddItemForm extends Component {
    itemRef = React.createRef();

    createItem = (e) => {
        e.preventDefault();
        const NewItem = {
            item: this.itemRef.current.value,
        }
        if(NewItem.item === ""){
             return null
        }   else {
        this.props.addItem(NewItem)
        e.currentTarget.reset();
    }}
    render() {
        return (
            <div>
                <form onSubmit={this.createItem}>
                    <input type="text" name="item" ref={this.itemRef} placeholder="New To Do Item"></input>
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}
