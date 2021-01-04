import React, { useState } from "react";
import {
    Card,
    Col,
    Container,
    Row,
    Button
} from 'react-bootstrap'
import { store } from "../redux/store";

const MyCart = () => {

    const [productDatalist, setProductDataList] = useState(store.getState().productList)
    store.subscribe(() => {
        setProductDataList(store.getState().productList)
    })

    const removeProduct = (element) => {
        store.dispatch({ type: "REMOVEPRODUCTS", payload : element})
    }

    return (<Container>
        <Row>
            {productDatalist.map(
                (element) => (element.map(
                        (elementValue, idx) => (
                            <Col xs={12} sm={6} md={4} key={idx} >
                                <Card style={{ width: '18rem', position: "relative" }}>
                                <Button style={{right: "0",width:"40px",position: "absolute"}} onClick={()=>removeProduct(element)}>X</Button>
                                    <Card.Img variant="top" style={{ height: "200px" }} src={elementValue.data.img} />
                                    <Card.Body>
                                        <Card.Title>Name: {elementValue.data.title}</Card.Title>
                                        <Card.Text>
                                            Price: {elementValue.productPrice} <br />
                                            Quantity: {elementValue.quantity}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )))
            )}
        </Row>
    </Container>);
};

export default MyCart;
