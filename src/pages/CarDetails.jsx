import React, { useEffect, useState } from "react";
import Popup from 'reactjs-popup';
import carData from "../assets/data/carData";
import { Container, Row, Col} from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import "../styles/find-car-form.css";

const URL = "https://slow-dogs-enjoy-116-73-243-172.loca.lt/vehicle";
const CarDetails = () => {
  const { slug } = useParams();
  const[singleCarItem,setSingleCarItem]= useState([])

  useEffect(()=>{
    async function getData(){
      const response = await fetch(URL);
      const data = await response.json();
      setSingleCarItem(data);
    }

    getData();
    console.log(singleCarItem,"SinglecarData");
  });

  

  // const singleCarItem = carData.find((item) => item.id === slug);



  return (
    <Helmet title={singleCarItem.brandName}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={singleCarItem.imgUrl} alt="" className="w-100" />
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{singleCarItem.modelName}</h2>

                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    ${singleCarItem.pricePerHour}.00 / Day
                  </h6>

                  <span className=" d-flex align-items-center gap-2">
                    <span style={{ color: "#f9a826" }}>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    ({singleCarItem.rating} ratings)
                  </span>
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
                    {singleCarItem.mileage}
                  </span>
                </div>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "2.8rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-map-pin-line" style={{ color: "#f9a826" }}></i>{" "}
                    {singleCarItem.gps}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-wheelchair-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.seatType}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-building-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.brand}
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
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;
