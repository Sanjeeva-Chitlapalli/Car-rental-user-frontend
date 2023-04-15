import React from 'react'
import { Table } from 'reactstrap'

const TableComp = ({columns,data}) => {
    console.log(data)
    return (
    
    <Table responsive size='sm'>
        
        <thead>
            <tr>
            {columns.map((column) => (
                <th key={column}>{column.header}</th>))}
            </tr>
        </thead>
        <tbody>
            {data.map((item)=>{
                return (
                    <tr key={item.id}>
                        {columns.map((column)=>(
                            <td>{item[column.key]}</td>
                        ))}
                    </tr>
                )
            })}
        </tbody>
    </Table>

    )
}


export default TableComp