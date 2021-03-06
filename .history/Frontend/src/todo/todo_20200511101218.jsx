import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'


const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleMarckAsDone = this.handleMarckAsDone.bind(this)
        this.handleMarkPending = this.handleMarkPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)

        this.handleRemove = this.handleRemove.bind(this)
        this.refresh()
    }

    refresh(description= '') {
        const serch = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${serch}`)
            .then(resp => this.setState({ ...this.state, description, list: resp.data }))
    }

    handleSearch(){
        this.refresh(this.state.description)
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    handleAdd() {

        const description = this.state.description
        axios.post(URL, { description })
            .then(resp => this.refresh())

    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh(this.state.description))

    }

    handleMarckAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkPending(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => this.refresh(this.state.description))
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas ' small='Cadastro'></PageHeader>
                <TodoForm description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd} 
                    handleSearch={this.handleSearch} />
                <TodoList 
                    list={this.state.list}
                    handleMarckAsDone={this.handleMarckAsDone}
                    handleMarkPending={this.handleMarkPending}
                    handleRemove={this.handleRemove} />
            </div>
        )
    }

}