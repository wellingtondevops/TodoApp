import React from 'react'
import IconButton from '../template/iconButton'
import iconButton from '../template/iconButton'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'marketAsDone' : ' '}>{todo.description}</td>
                <td>
                    <IconButton style='success' icon='check'
                        onClick={() => props.handleMarckAsDone(todo)}></IconButton>
                    <IconButton style='warning' icon='undo'
                        onClick={() => props.handleMarkPending(todo)}></IconButton>
                    <IconButton style='danger' icon='trash-o'
                        onClick={() => props.handleRemove(todo)}></IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>

    )
}