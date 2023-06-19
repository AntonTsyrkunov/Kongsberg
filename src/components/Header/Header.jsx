import { useState } from "react";
import { Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap';
import css from '../Header/Header.module.css'

const Header = ({onSubmit}) => {
    const [querry, setQuerry] = useState("");

    const handleInputChange = (e) => {
        setQuerry(e.target.value);
    }

    const handleSearch = evt => {
        evt.preventDefault();
        onSubmit(querry);
        setQuerry('');
      };

      return (
        <header className="header">
          <Container style={{ padding: '20px' }}>
            <Row className="align-items-center justify-content-center">              
              <Col xs={10} sm={6} md={8} lg={9}>
                <Form onSubmit={handleSearch}>
                  <Form.Group controlId="formSearch">
                    <Row className="align-items-center">
                      <Col xs={9} sm={8} md={9}>
                        <FormControl
                          name="query"
                          value={querry}
                          type="text"
                          autoComplete="off"
                          autoFocus
                          placeholder="Enter your query"
                          className={css.placeholder_normal}
                          onChange={handleInputChange}
                        />
                      </Col>
                      <Col xs={3} sm={4} md={3}>
                        <Button variant="primary" type="submit" block>
                          Perform search
                        </Button>
                      </Col>
                    </Row>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Container>
        </header>
      );
}

export {Header};