import React,{useEffect,useState} from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import '../styles/common-section.css'
import axios from "axios";


const CarListing = () => {

  const URL = "https://64104846864814e5b64ccc7b.mockapi.io/vehicle";
  const[carData,setCarData]= useState([])

  useEffect(()=>{
    const getCarData = () => {
    axios
    .get(URL)
    .then(data => {
      setCarData(data.data);
    })
    .catch(error => console.log(error));
    };
  getCarData();
  },[]);


  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5 filter__elements">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> Sort By
                </span>

                <select>
                  <option>Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>

                <span className=" d-flex align-items-center gap-2">
                <i class="ri-filter-2-fill"></i> Filters
                </span>


                <Filters filter="Brand" option1="Tesla" option2="Toyota" option3="BMW"/>
                <Filters filter="Price" option1="10" option2="20" option3="30"/>
                <Filters filter="Seats" option1="1" option2="2" option3="3"/>


                <div className="search__box" >
                  <input type="text" placeholder="Search" />
                  <span>
                    <i class="ri-search-line"></i>
                  </span>
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
    <select>
                  <option>{filter}</option>
                  <option>{option1}</option>
                  <option >{option2}</option>
                  <option >{option3}</option>
    </select>
  </div>
  )
}
export default CarListing;
