import React, { useEffect, useState } from 'react'
import TableComp from '../../components/adminUI/TableComp/TableComp'
import axios from 'axios';
import api from '../../api/api';
import CommonSection from '../../components/UI/CommonSection';
import { useParams } from 'react-router-dom';

function StoreById() {

    const { id } = useParams();
    const colList=[
    
    {
        header: 'Name',
        key: 'modelName'
    },
    {
        header: 'Brand',
        key: 'brandName'
    },
    {
        header: 'Vehicle Type',
        key: 'vehicleType'
    },
    {
        header: 'Kms travelled',
        key: 'kmsWent'
    },
    {
        header: 'Mileage',
        key: 'mileage'
    },
    {
        header: 'No of Seats',
        key: 'noOfSeats'
    },
    {
        header: 'Price Per Hour',
        key: 'pricePerHour'
    },
]
    const [fullData,setFullData]=useState([]);

    useEffect(()=>{
        const getInvoiceData = () => {
        axios
        .get(api+'/vehicle/store/'+id)
        .then(data => { setFullData(data.data); })
        .catch(error => console.log(error));
        };
      getInvoiceData();
      console.log(fullData);
      },[id]);


  return (
    <div>
        <CommonSection title="Vehicles" />
        <TableComp columns={colList} data={fullData}/>
    </div>
  )
}

export default StoreById;