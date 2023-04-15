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


  const location=useLocation();
  console.log(location)
  const TimeData=location.state;
  console.log(TimeData);

  const [carData,setCarData]= useState([])

  useEffect(()=>{
    const getCarData = () => {
    axios
    .get(api+'/vehicle')
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
                  <select className="filter__element">
                  <option>Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select> 
                </span>

                


                <span className=" d-flex align-items-center gap-3 filter__element">
                <i class="ri-filter-2-fill"></i><p>Filters</p>
                <span className="d-flex align-items-center gap-5 filter__element">
                <Filters filter="Brand" option1="Tesla" option2="Toyota" option3="BMW"/>
                <Filters filter="Price" option1="10" option2="20" option3="30"/>
                <Filters filter="Seats" option1="1" option2="2" option3="3"/>
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


const Filters = ({filter, option1, option2, option3})=>{
  return(
  <div>
    <p>{filter}</p>
    <select className="filter__elements">
                  <option>--none--</option>
                  <option>{option1}</option>
                  <option >{option2}</option>
                  <option >{option3}</option>
    </select>
  </div>
  )
}
export default CarListing;
