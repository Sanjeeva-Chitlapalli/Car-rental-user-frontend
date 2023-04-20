import React, { useEffect, useState } from 'react'
import TableComp from '../../components/adminUI/TableComp/TableComp'
import FormComp from '../../components/adminUI/FormComp/FormComp';
import axios from 'axios';
import api from '../../api/api';
import CommonSection from '../../components/UI/CommonSection';
import '../../styles/admin/add-table.css'

function Stores() {
    const colList=[
    
    {
        header: 'Name',
        key: 'name'
    },
    {
        header: 'Location',
        key: 'location'
    },{
        header: 'Admin Id',
        key: 'admin_id'
    },
]
    const [fullData,setFullData]=useState([]);

    const formFields=[
        {
            label: 'Store Name',
            dataType: 'text',
            name: 'name'
        },
        {
            label: 'Location',
            dataType: 'text',
            name: 'location'
        },
    ]

    useEffect(()=>{
        const getFullData=()=>{
            axios.get(api+'/store')
            .then(data=>{
                setFullData(data.data);
            })
            .catch(err=>console.log(err));
        };
    getFullData();
    
    },[])


  return (
    <div>
        <CommonSection title="Stores" />
        <div className='add-button'>
            <FormComp formTitle="Add Stores" FieldList={formFields} tableUrl="/store" />
        </div>
        <div className='table-comp'>
            <TableComp columns={colList} data={fullData} url="/stores/" isClickable={true}/>
        </div>
    </div>
  )
}

export default Stores