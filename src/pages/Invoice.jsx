import React, { useEffect } from "react";

import carData from "../assets/data/carData";
import { Container, Col, Row} from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import "../styles/find-car-form.css";
import "../styles/invoice.css";


const CarDetails = () => {
  const { slug } = useParams();

  const singleCarItem = carData.find((item) => item.carName === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleCarItem]);

  return (
    <Helmet title={singleCarItem.carName}>
      <section>
        <Container>
        <Row>
            <Col lg="6">
              <img src={singleCarItem.imgUrl} alt="" className="w-100" />
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{singleCarItem.carName}</h2>

                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    ${singleCarItem.price}.00 / Day
                  </h6>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;
