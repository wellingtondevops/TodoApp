import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeDescription, serch, add } from './todoActions'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {

        const {add,serch, description}=this.props

        if (e.key === 'Enter') {
            e.shiftKey ? se : this.props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }

    }
    render() {
        return (
            <div role='form' className='todoForm'>
                <Grid cols='12 9 10'>
                    <input id='description' className='form-control'
                        placeholder='Adicione uma tarefa'
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}
                        value={this.props.description}></input>
                </Grid>
                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus'
                        onClick={this.props.handleAdd}></IconButton>
                    <IconButton style='info' icon='search'
                        onClick={this.props.handleSearch}></IconButton>
                    <IconButton style='default' icon='close'
                        onClick={this.props.handleClear}></IconButton>
                </Grid>
            </div>
        )
    }
}



const mapStateToProps = state => ({ description: state.todo.description })

const mapDispathToProps = dispatch =>
    bindActionCreators({ changeDescription, serch, add }, dispatch)
export default connect(mapStateToProps, mapDispathToProps)(TodoForm)