import React from 'react'

export default props => {

    const renderRows = () => {
        return (
            <tr><td>Ok</td></tr>
        )
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>

    )
}