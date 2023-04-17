import React,{useEffect,useState} from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import '../styles/common-section.css'

import axios from "axios";
import { useLocation } from "react-router-dom";
import api from "../api/api"


const CarListing = () => {

  const [filters,setFilters]=useState([])
  const location=useLocation();
  console.log(location)
  const TimeData=location.state.TimeData;
  console.log(TimeData);

  const query=location.search;
  console.log(query)
  const [carData,setCarData]= useState([])

  const changeHandler = e => {
    setFilters({...filters,[e.target.name]: e.target.value})
    console.log(filters)
  }


  const ApiUrl=(filters)=>{
    const apiUrl=""
    if (filters.brand){
      apiUrl+="&brand="+filters.brand;
    }
    if (filters.price){
      apiUrl+="&estPrice="+filters.price;
    }
    if (filters.noOfSeats){
      apiUrl+="&noOfSeats="+filters.noOfSeats;
    }
    return apiUrl
  }

  useEffect(()=>{
    const getCarData = () => {
    
    axios
    .get(api+'/vehicle'+'?fromTime='+TimeData.FromDate+'T'+TimeData.FromTime+'&toTime='+TimeData.ToDate+'T'+TimeData.ToTime)
    //+ '?fromTime="'+TimeData.FromDate+'"T"'+TimeData.FromTime+'"&toTime="'+TimeData.ToDate+'"T"'+TimeData.ToTime+'"'
    .then(data => {
      
      setCarData(data.data);
    })
    .catch(error => console.log(error));
    };
  getCarData();
  },[]);
 console.log(carData)

  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="w-95 mb-3 filter__elements ">
              <div className=" d-flex align-items-center gap-5 mb-5 flex-wrap">
                <span className=" d-flex align-items-center gap-2 ">
                  <i class="ri-sort-asc"></i><p>Sort by</p>
                  <select className="filter__element" name="sort" onChange={changeHandler}>
                  <option>Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select> 
                </span>

                


                <span className=" d-flex align-items-center gap-3 filter__element">
                <i class="ri-filter-2-fill"></i><p>Filters</p>
                <span className="d-flex align-items-center gap-5 filter__element">
                <Filters filter="Brand" name="brand" options={["Tesla"]} option1="Tesla" option2="Toyota" option3="BMW" changeHandler={changeHandler}/>
                <Filters filter="Price" name="price" option1="10" option2="20" option3="30" changeHandler={changeHandler}/>
                <Filters filter="Seats" name="noOfSeats" option1="2" option2="5" option3="7" changeHandler={changeHandler}/>
                </span>
                
                </span>
                
                

                <button className="apply__btn btn">Apply</button>
              </div>
              </div>
              
            </Col>
            {carData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};


const Filters = ({filter,name, option1, option2, option3,changeHandler})=>{
  return(
  <div>
    <p>{filter}</p>
    <select className="filter__elements" name={name} onChange={changeHandler}>
                  <option>--none--</option>
                  <option>{option1}</option>
                  <option >{option2}</option>
                  <option >{option3}</option>
    </select>
  </div>
  )
}
export default CarListing;
