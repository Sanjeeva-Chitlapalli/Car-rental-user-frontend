import React, { useEffect, useState } from 'react'
import TableComp from '../../components/adminUI/TableComp/TableComp'
import axios from 'axios';
import api from '../../api/api';
import CommonSection from '../../components/UI/CommonSection';

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
        <TableComp columns={colList} data={fullData}/>
    </div>
  )
}

export default Orders