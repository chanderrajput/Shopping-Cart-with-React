import React, { useState } from "react";
import { getData } from "../../constant/shoppingCartData"
import { store } from "./../../redux/store"
import {
    Card,
    Col,
    Container,
    Row,
    Form,
    ToggleButtonGroup,
    ToggleButton,
    Button
} from 'react-bootstrap'

import {
    useParams,
} from "react-router-dom";

const Product = () => {
    const { category, productName, productID } = useParams();
    const dataValue = getData(category, productName).items.find(({ id }) => id === Number(productID))
    const [price, setPrice] = useState(dataValue.totalPrice);
    const [updateQuantity, setUpdatedQuantity] = useState(1);
    const priceHashRef = React.useRef({});

    const updatePrice = (item, cat) => {
        if (item && cat) {
            priceHashRef.current[cat] = item;
            let temp = 0;
            for (let x in priceHashRef.current) {
                temp += priceHashRef.current[x].price;
            }
            let finalPrice = dataValue.totalPrice + temp;
            if (updatePrice > 1) {
                finalPrice *= updatePrice;
            }
            setPrice(finalPrice);
        }
    }

    const onChangeProductCountUpdatePrice = (event) => {
        if (Number(event.target.value) > 0) {
            setUpdatedQuantity(Number(event.target.value));
        } else {
            setUpdatedQuantity(0);
        }
    }

    const updateCartCounter = () => {
        const productListToPass = [
            {
                data: dataValue,
                productPrice: (price * updateQuantity),
                quantity: updateQuantity
            }
        ]
        store.dispatch({ type: "ADDPRODUCTS", payload: productListToPass })
    }



    return (
        <Container>
            <Row >
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" style={{height:"200px"}} src={dataValue.img} />
                        <Card.Body>
                            <Card.Title>{dataValue.title}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col style={{ textAlign: "center" }}>
                    <Card.Header style={{ width: "53%" }}>
                        Product Name: {dataValue.title}
                    </Card.Header>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            {dataValue.varients.map(
                                (varient, idx) =>
                                (
                                    <div key={idx}>
                                        <div><b> {varient.varientName} </b></div>
                                        <div>
                                            <ToggleButtonGroup type="radio" name="options">
                                                {varient.values.map(
                                                    (value) =>
                                                    (
                                                        <ToggleButton key={value.name}
                                                            onChange={(e) => e.currentTarget.checked && updatePrice(value, varient.varientName)} value={value.name}>{value.name}</ToggleButton>
                                                    )
                                                )}
                                            </ToggleButtonGroup>
                                        </div>
                                    </div>
                                )
                            )}
                            <div style={{ marginTop: "10px" }}>
                                <div><b> QUANTITY: </b></div>
                                <Form.Control type="number" defaultValue="1" onChange={e =>  onChangeProductCountUpdatePrice(e)} />
                                <h3>Product Price: <br/> {price * updateQuantity}</h3>
                            </div>
                        </Card.Body>
                        <div style={{ marginBottom: "20px" }}>
                            <Button onClick={() => updateCartCounter()} >Add to card</Button>
                        </div>
                    </Card>
                </Col>
            </Row>
            
        </Container>
    );
}

export default Product


