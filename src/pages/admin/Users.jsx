import React, { useEffect, useState } from 'react'
import TableComp from '../../components/adminUI/TableComp/TableComp'
import axios from 'axios';
import api from '../../api/api';
import CommonSection from '../../components/UI/CommonSection';

function Users() {
    const colList=[
    {
        header: 'First Name',
        key: 'firstName'
    },
    {
        header: 'Last Name',
        key: 'lastName'
    },{
        header: 'Email',
        key: 'email'
    },
    {
        header: 'Role',
        key: 'roleName'
    },
]
    const [fullData,setFullData]=useState([]);

    useEffect(()=>{
        const getFullData=()=>{
            axios.get(api+'/user')
            .then(data=>{
                setFullData(data.data);
            })
            .catch(err=>console.log(err));
        };
    getFullData();
    
    },[])

  return (
    <div>
        <CommonSection title="Users" />
        <TableComp columns={colList} data={fullData}/>
    </div>
  )
}

export default Users;