import {React, useState } from "react";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";
import { useNavigate, Navigate } from "react-router-dom";

  





const FindCarForm = () => {

  const TimeData=[
    {
    FromDate:"",
    FromTime:"",
    ToDate:"",
    ToTime:""
    }]

  const navigate=useNavigate()

  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">

        <FormGroup className="form__group">
          <p>From</p>
          <input type="date" placeholder="Journey date" onChange={(e)=>{TimeData.FromDate=e.target.value;}} required />
          <input type="time" placeholder="Journey date" onChange={(e)=>{TimeData.FromTime=e.target.value;}} required />
        </FormGroup>
        <FormGroup className="form__group">
          <p>To</p>
          <input type="date" placeholder="Journey date" onChange={(e)=>{TimeData.ToDate=e.target.value;}} required />
          <input type="time" placeholder="Journey date" onChange={(e)=>{TimeData.ToTime=e.target.value;console.log(TimeData);}} required />
          
        </FormGroup>
        {/* {<FormGroup className="select__group">
          <p>Type of Car</p>
          <select>

            <option value="SUV">SUV</option>
            <option value="ac">AC Car</option>  
            <option value="non-ac">Non AC Car</option>
          </select>
        </FormGroup>} */}

        <FormGroup className="form__group">
          <button onClick={()=>{navigate('/cars',{state:{TimeData:TimeData}})}} className="btn find__car-btn" >Find Car</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
