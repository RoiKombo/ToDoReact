import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        const {item} = this.props.details;
        
        return (
            <li>{item}</li>
        )
    }
}
