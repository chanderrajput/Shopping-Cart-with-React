import React from "react";
import {
    Card,
    Col,
    Container,
    Row,
    Button
} from "react-bootstrap"
import {
    Link
} from "react-router-dom";
import { getData } from "../../constant/shoppingCartData";
import {
    useParams,
} from "react-router-dom";

const ProductsList = () => {


    const { category, productName } = useParams();
    return (
        <Container style={{ position: "", top: "56px" }}>
            <Row>
                {getData(category, productName).items.map(
                    (item, idx) =>
                        <Col key={idx} xs={12} sm={6} md={4} lg={3} >
                            <Card style={{ width: '17rem' }}>
                                <Card.Img variant="top" style={{ height: "200px" }} src={item.img} />
                                <Card.Body>
                                    <Card.Title> {item.title}</Card.Title>
                                    <Card.Text>
                                        <b> price:</b> {item.price} <br />
                                        <b>Description:</b> {item.text}
                                    </Card.Text>
                                    <Link to={`/${category}/${productName}/${item.id}`}><Button>Product</Button></Link>
                                </Card.Body>
                            </Card>
                        </Col>
                )}
            </Row>
        </Container>);
};

export default ProductsList