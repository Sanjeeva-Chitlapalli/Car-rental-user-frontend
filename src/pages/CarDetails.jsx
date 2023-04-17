import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col} from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams,useLocation } from "react-router-dom";
import "../styles/find-car-form.css";
import api from "../api/api";
import CommonSection from "../components/UI/CommonSection";

const CarDetails = () => {
  const location=useLocation();
  console.log(location)
  const TimeData=location.state;

  const { id } = useParams();
  const [singleCarItem,setSingleCarItem]= useState([])

  console.log(id)

  const [userData,setUserData]=useState({
    user:"",
    fromTime:"",
    toTime:"",
    estPrice:singleCarItem.estPrice,
    vehicle_id:id,

});

  useEffect(()=>{
    const getSingleCarData = () => {
    axios
    .get(api+'/vehicle/'+id)
    .then(data => { setSingleCarItem(data.data); })
    .catch(error => console.log(error));
    };
  getSingleCarData();
  },[id]);
  

  const postOrder=(e)=>{
    e.preventDefault();
    axios
    .post(api+"/order",{
    user:userData.user, 
    fromTime:userData.fromTime,
    toTime:userData.toTime,
    estPrice:userData.estPrice,
    vehicle_id:userData.vehicle_id
    }).then(res=>console.log('Posting Data',res)).catch(error => console.log(error))
  }



  return (
    
    <Helmet title={singleCarItem.brandName}>
      <CommonSection title="Car Details" />
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={singleCarItem.url} alt="" className="w-100" />
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{singleCarItem.modelName}</h2>

                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    ${singleCarItem.estPrice}.00 / Day
                  </h6>
                </div>

                <p className="section__description">
                  {singleCarItem.description}
                </p>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-roadster-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.brandName}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-settings-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.automatic}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-timer-flash-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.mileage} kmpl
                  </span>
                </div>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "2.8rem" }}
                >
                  {/* <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-map-pin-line" style={{ color: "#f9a826" }}></i>{" "}
                    {singleCarItem.gps}
                  </span> */}

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-wheelchair-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.noOfSeats}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-building-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.brandName}
                  </span>
                </div>
              </div>
              {/* {<div>
                <Popup
                  trigger={(open) => (
                    <button className="button">
                      Trigger - {open ? "Opened" : "Closed"}
                    </button>
                  )}
                  position="right center" closeOnDocumentClick>
                  <span> Popup content </span>
                </Popup>
              </div>} */}
              {/* {<div className="form__group">
                  <p>From</p>
                  <input type="date" placeholder="Journey date" required />
                  <p>To</p>
                  <input type="date" placeholder="Journey date" required />
                  <div className="payment text-end mt-5">
                  <button className="btn find__car-btn">Book Car</button>
                  </div>
            </div>} */}

          <button className="car__item-btn a confirm__btn" onClick={postOrder}>Confirm Booking</button>
            </Col>
            
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;
