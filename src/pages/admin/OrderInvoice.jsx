import React, { useEffect, useState } from 'react'
import axios from 'axios';
import api from '../../api/api';
import CommonSection from '../../components/UI/CommonSection';
import { useParams } from 'react-router-dom';
import { Col } from 'reactstrap';
import '../../styles/common-section.css'

function OrderInvoice() {

    const { id } = useParams();
    const colList=[
    
    
    {
        header: '',
        key: 'userFirstName'
    },
    {
        header: '',
        key: ''
    },
    {
        header: '',
        key: ''
    },
    {
        header: 'From Time',
        key: ''
    },
    {
        header: 'To Time',
        key: ''
    },
    {
        header: 'Base Amount',
        key: ''
    },{
        header: 'Penalties',
        key: ''
    },
    {
        header: 'Tax',
        key: ''
    },
    {
        header: 'Total Amount',
        key: 'totalAmount'
    },
]
    const [fullData,setFullData]=useState([]);

    useEffect(()=>{
        const getInvoiceData = () => {
        axios
        .get(api+'/invoice/order/'+id)
        .then(data => { setFullData(data.data); })
        .catch(error => console.log(error));
        };
      getInvoiceData();
      console.log(fullData);
      },[id]);


  return (
    <div>
        <CommonSection title="Invoice" />
        <div className='invoice'>
        <Col >
        <p>User Name: {fullData.userFirstName}</p>
        <p>Vehicle Name: {fullData.vehicleModelName}</p>
        <p>Vehicle PricePerHour: {fullData.vehiclePricePerHour}</p>
        <p>From Date: {fullData.fromDate}</p>
        <p>From Time: {fullData.fromTime}</p>
        <p>To Date: {fullData.toDate}</p>
        <p>To Time: {fullData.toTime}</p>
        </Col>
        <Col>
        <p>Base Amount: {fullData.amount}</p>
        <p>Pentalties: {fullData.costForPenalties}</p>
        <p>Tax: {fullData.taxAndOthers}</p>
        <p>Total Amount: {fullData.totalAmount}</p>
        </Col>
        
        
        </div>
    </div>
  )
}

export default OrderInvoice;