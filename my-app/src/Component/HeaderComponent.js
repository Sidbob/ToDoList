import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/esm/Form'
import Button from 'react-bootstrap/esm/Button';
import Offcanvas from 'react-bootstrap/esm/Offcanvas';
import { useState } from 'react';
import {Link} from 'react-router-dom'




const HeaderComponent = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (

        <>

            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link> <Link to='/Add'>Add</Link> </Nav.Link>
                        <Nav.Link> <Link to='/Delete'>Delete</Link> </Nav.Link>
                        <Nav.Link> <Link to='/Update'>Update</Link> </Nav.Link>
                    </Nav>
                </Container>

                {/* <DropdownButton id="dropdown-item-button" title="Dropdown button">
                    <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                    <Dropdown.Item as="button">AddCategory</Dropdown.Item>
                    <Dropdown.Item as="button">Another action</Dropdown.Item>
                    <Dropdown.Item as="button">Something else</Dropdown.Item>
                </DropdownButton> */}

                <Button variant="primary" onClick={handleShow}>
                    Launch
                </Button>

                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Admin Panel</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>


                        {/* <Form.Select aria-label="Default select example">
                            <option>ADD</option>
                            <option value="1"><Link to='/Add_Category'>Add Category</Link></option>
                            <option value="2"><Link to='/Add_SUbcategory'>Add Subcategory</Link></option>
                            <option value="3"><Link to='/Add_product'>Add Product</Link></option>
                        </Form.Select> */}


                    </Offcanvas.Body>
                </Offcanvas>


            </Navbar>




        </>

    )
}

export default HeaderComponent;

