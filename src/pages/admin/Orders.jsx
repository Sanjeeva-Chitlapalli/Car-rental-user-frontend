import React, { useEffect, useState } from 'react'
import TableComp from '../../components/adminUI/TableComp/TableComp'
import axios from 'axios';
import api from '../../api/api';
import CommonSection from '../../components/UI/CommonSection';
import FormComp from '../../components/adminUI/FormComp/FormComp';


function Orders() {

    
    const colList=[
    
    {
        header: 'First Name',
        key: 'userFirstName'
    },
    {
        header: 'Last Name',
        key: 'userLastName'
    },{
        header: 'User Email',
        key: 'userEmail'
    },
    {
        header: 'From Time',
        key: 'fromTime'
    },
    {
        header: 'To Time',
        key: 'toTime'
    },
    {
        header: 'Status',
        key: 'status'
    },
    {
        header: 'Estimate Price',
        key: 'estPrice'
    },
]
    // const OrderOnClickFunction=()=>{
    //     navigate(`/orders/${id}`)

    // }



    const formFields=[
        {
            label: 'User',
            dataType: 'text',
            name: 'user'
        },
        {
            label: 'From Time',
            dataType: 'time',
            name: 'fromTime'
        },
        {
            label: 'To Time',
            dataType: 'time',
            name: 'toTime'
        },
        {
            label: 'Estimate Price',
            dataType: 'number',
            name:'estPrice'
        },
        {
            label: 'Vehicle ID',
            dataType: 'number',
            name: 'vehicle_id'
        },
    ]

    const [fullData,setFullData]=useState([]);


    useEffect(()=>{
        const getFullData=()=>{
            axios.get(api+'/order')
            .then(data=>{
                setFullData(data.data);
            })
            .catch(err=>console.log(err));
        };
    getFullData();
    
    },[])


  return (
    <div>
        <CommonSection title="Orders" />
        <FormComp formTitle="Add Orders" FieldList={formFields} tableUrl="/order" />
        <TableComp columns={colList} data={fullData} url="/orders/" isClickable={true} />
    </div>
  )
}

export default Orders;