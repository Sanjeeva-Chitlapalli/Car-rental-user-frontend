import React, { useEffect, useState } from 'react'
import TableComp from '../../components/adminUI/TableComp/TableComp'
import axios from 'axios';
import api from '../../api/api';
import CommonSection from '../../components/UI/CommonSection';

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
        <TableComp columns={colList} data={fullData}/>
    </div>
  )
}

export default Stores