import React from 'react'
import PropTypes from 'prop-types'

import TodoItem from './TodoItem'



export class Todos extends React.Component {
    render() {
        return this.props.todos.map((todos) => (
            //mapping forms a list and list should have a key (just shows warnings)
            <TodoItem key={todos.id} todo={todos} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
        ))
    }
}
// proptypes are like validations for properties a component should have

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

export default Todos