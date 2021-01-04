import React, { useState } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {
  Navbar,
  Form,
  Nav,
  Button,
  ButtonGroup,
  DropdownButton,
  Dropdown
} from "react-bootstrap"
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { store } from "./redux/store";
import ProductsList from "./components/Products/ProductsList";
import Home from './components/Home/Home'
import Product from "./components/Products/Product";
import MyCart from "./components/MyCart";


function App() {
  const [count, setCount] = useState(store.getState().count)
  store.subscribe(() => {
    setCount(store.getState().count)
  })
  return (
    <Router key = "0">
      {/* <div > */}
        <Navbar bg="dark" variant="dark">
          <Link to="/"> <Navbar.Brand >Home</Navbar.Brand></Link>
          <div >
            <ButtonGroup>
              <DropdownButton key="0" as={ButtonGroup} title="Mobiles" id="bg-nested-dropdown">
                <Dropdown.Item key="0" eventKey="1"><Link className="dropDownLink" to={`/${"mobile"}/${"samsung"}`} >Samsung</Link> </Dropdown.Item>
                <Dropdown.Item key="1" eventKey="2"><Link className="dropDownLink" to={`/${"mobile"}/${"iphone"}`} >Iphone</Link> </Dropdown.Item>
                <Dropdown.Item key="2" eventKey="3"><Link className="dropDownLink" to={`/${"mobile"}/${"redmi"}`} >Redmi</Link> </Dropdown.Item>
              </DropdownButton>
              <DropdownButton key="1" as={ButtonGroup} title="Laptop" id="bg-nested-dropdown">
                <Dropdown.Item key="0" eventKey="1"><Link className="dropDownLink" to={`/${"laptop"}/${"dell"}`} >Dell</Link> </Dropdown.Item>
                <Dropdown.Item key="1" eventKey="2"><Link className="dropDownLink" to={`/${"laptop"}/${"mac"}`} >Mac</Link> </Dropdown.Item>
                <Dropdown.Item key="2" eventKey="3"><Link className="dropDownLink" to={`/${"laptop"}/${"samsung"}`} >Samsung</Link> </Dropdown.Item>
              </DropdownButton>
              <DropdownButton key="2" as={ButtonGroup} title="Mens" id="bg-nested-dropdown">
                <Dropdown.Item key="0" eventKey="1">Shirts</Dropdown.Item>
                <Dropdown.Item key="1"eventKey="2">Paints</Dropdown.Item>
              </DropdownButton>
              <DropdownButton key="3" as={ButtonGroup} title="Women" id="bg-nested-dropdown">
                <Dropdown.Item key="0" eventKey="1">Paints</Dropdown.Item>
                <Dropdown.Item key="1" eventKey="2  ">Shirts</Dropdown.Item>
              </DropdownButton>
            </ButtonGroup>
          </div>
          <Nav className="mr-auto">
          </Nav>
          <Form inline >
            <AddShoppingCartIcon style={{ color: "white", fontSize: 29 }}></AddShoppingCartIcon>
            <p style={{ marginRight: "10px", color: "white" }}>{count}</p>
            <Link to={`/MyCart`}><Button variant="outline-info" >My Cart</Button></Link>
          </Form>
        </Navbar>
      {/* </div> */}


      <Switch>
        <Route key="0" path="/" exact component={Home} />
        <Route key="1" path="/:category/:productName" exact component={ProductsList} />
        <Route key="2" path="/:category/:productName/:productID" component={Product} />
        <Route key="3" path="/MyCart" exact component={MyCart} />
      </Switch>
    </Router>

  );
}

export default App;