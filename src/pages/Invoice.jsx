import React, { useEffect } from "react";

import carData from "../assets/data/carData";
import { Container} from "reactstrap";
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

<div class="page-header">
    <h1>Invoice Template  </h1>
    <div class="container">
    <div class="row">
        <div class="col-md-6 col-md-offset-3 body-main">
            <div class="col-md-12">
               <div class="row">
                    <div class="col-md-4">
                        <img class="img" alt="Invoce Template" src="http://pngimg.com/uploads/shopping_cart/shopping_cart_PNG59.png" />
                    </div>
                    <div class="col-md-8 text-right">
                        <h4 ><strong>BBBootstrap</strong></h4>
                        <p>221 ,Baker Street</p>
                        <p>1800-234-124</p>
                        <p>example@gmail.com</p>
                    </div>
                </div>
                <br />
                <div class="row">
                    <div class="col-md-12 text-center">
                        <h2>INVOICE</h2>
                        <h5>04854654101</h5>
                    </div>
                </div>
                <br />
                <div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th><h5>Description</h5></th>
                                <th><h5>Amount</h5></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="col-md-9">Samsung Galaxy 8 64 GB</td>
                                <td class="col-md-3"><i class="fas fa-rupee-sign" area-hidden="true"></i> 50,000 </td>
                            </tr>
                            <tr>
                                <td class="text-right">
                                <p>
                                    <strong>Shipment and Taxes:</strong>
                                </p>
                                <p>
                                    <strong>Total Amount: </strong>
                                </p>
							    <p>
                                    <strong>Discount: </strong>
                                </p>
							    <p>
                                    <strong>Payable Amount: </strong>
                                </p>
							    </td>
                                <td>
                                <p>
                                    <strong><i class="fas fa-rupee-sign" area-hidden="true"></i> 500 </strong>
                                </p>
                                <p>
                                    <strong><i class="fas fa-rupee-sign" area-hidden="true"></i> 82,900</strong>
                                </p>
							    <p>
                                    <strong><i class="fas fa-rupee-sign" area-hidden="true"></i> 3,000 </strong>
                                </p>
							    <p>
                                    <strong><i class="fas fa-rupee-sign" area-hidden="true"></i> 79,900</strong>
                                </p>
							    </td>
                            </tr>
                            <tr >
                                <td class="text-right"><h4><strong>Total:</strong></h4></td>
                                <td class="text-left"><h4><strong><i class="fas fa-rupee-sign" area-hidden="true"></i> 79,900 </strong></h4></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <div class="col-md-12">
                        <p><b>Date :</b> 6 June 2019</p>
                        <br />
                        <p><b>Signature</b></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>



        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;
