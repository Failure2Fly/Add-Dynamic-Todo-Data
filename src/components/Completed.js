import React from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

class Completed extends React.Component {

    render() {

        let completedTasks = this.props.sharedTodos.filter((task) => task.completed === 'yes').map((todo, key) => <Todo key={key} {...todo} />)

        return <div className="container">
            <br/>
            <h1 className="text-center">Todos</h1>
            <div className="row">
                <div className="col-sm-6 col-sm-offset-3">
                </div>
                <div className="well well-sm">
                <button className="btn btn-default" type="button" onClick={() => browserHistory.push('/')}>Return to Tasks</button>
            </div>
            <ul>
            {completedTasks}
            </ul>
        </div>
        </div>
    }
}

// Map shared Redux state to props
const mapStateToProps = (redux) => {
    return {
        sharedTodos: redux.state.todos
    }
}

// Export the component, connected to Redux, for other components to import
export default connect(mapStateToProps)(Completed)