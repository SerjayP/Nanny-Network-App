import React from "react";
import { Row, Card } from "react-bootstrap";
import SitterData from "../data";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";

export default function Sitter() {
  return (
    <main>
      <h1 style={{padding: '10px'}}>Our Top Sitters:</h1>
      <div  style={{padding: '10px'}}>
         <Row xs={2} md={4} className="g-4">
      {SitterData.map((sitter, index) => (
        <Col> 
        <Link to={`/sitter/${index}`} style={{ textDecoration: 'none', color: 'black'}}>
          <Card className="h-100 sitterBox"style={{padding: '10px', whiteSpace: 'normal'}}>
            <Card.Img variant="top" src={sitter.img} alt={`image of ${sitter.img}`}/>
            <Card.Body>
              <Card.Title>{sitter.name}, {sitter.age}</Card.Title>
              <Card.Text>
              Education:&nbsp;
               {sitter.education}
              </Card.Text>
            </Card.Body>
          </Card>
          </Link>
        </Col>
      ))}
    </Row>
        </div>
    </main>
  );
}
