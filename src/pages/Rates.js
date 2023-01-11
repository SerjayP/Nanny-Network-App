import React from 'react';
import { Row, Col, Card} from 'react-bootstrap';

export default function Rates() {
  return (
    <main className="pt-3">
    <div>
      <small>*These rates are pre-inflation. Rates will change on January 15, 2023 with an 200% increase.*</small>
      <h1>Our Rates</h1>
      <p>
        At <i>the Nanny Network</i>, we offer competitive rates for high-quality
        babysitting services. Our rates are based on the number of children, the
        length of the babysitting session, and any additional services
        requested.
      </p>
      <Row className="pb-3">
      <Col>
      <Card className="mb-3" style={{ width: '300px', height: '200px', textAlign: 'center' }}>
      <Card.Body>
        <Card.Title>Basic Package</Card.Title>
        <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/30/null/external-blocks-children-toys-vitaliy-gorbachev-lineal-color-vitaly-gorbachev-2.png"/>
        <h1>$15</h1>
        <Card.Text>
        $15 per hour for one child
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card className="mb-3" style={{ width: '300px', height: '200px', textAlign: 'center' }}>
      <Card.Body>
        <Card.Title>Premium Package</Card.Title>
        <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/30/null/external-blocks-children-toys-vitaliy-gorbachev-lineal-color-vitaly-gorbachev-1.png"/>
        <h1>$20</h1>
        <Card.Text>
        $20 per hour for two children
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card className="mb-3" style={{ width: '300px', height: '200px', textAlign: 'center' }}>
      <Card.Body>
        <Card.Title>Elite Package</Card.Title>
        <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/30/null/external-blocks-children-toys-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"/>
        <h1>$25</h1>
        <Card.Text>
        $25 per hour for three or more children
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    </Row>
      

      <h3>Additional Services:</h3>


        <li>$5 per hour for each additional child over three </li>
        <li>$5 per hour for meal preparation</li>
        <li>
          $10 per hour for light housekeeping tasks (such as picking up toys or
          loading/unloading the dishwasher)
        </li>
    <br/>

      <h3>Discounts:</h3>

      
        <li>10% discount for booking 4 or more consecutive hours</li>

        <li>5% discount for booking 10 or more consecutive hours</li>
      
      <br/>

      <h3>Example:</h3>
      <p>
        If you have two children and would like the babysitter to stay for 4
        hours while also preparing meals and doing light housekeeping tasks, the
        total cost would be calculated as follows:
      </p>

      <ul>
        <li>Base rate for two children: </li>

        <li>
          $20 per hour Additional services: $5 per hour for meal preparation +
          $10 per hour for light housekeeping tasks = $15 per hour
        </li>

        <li>Total hourly rate: $20 + $15 = $35 per hour</li>

        <li>4-hour booking: $35 per hour x 4 hours = $140</li>

        <li>
          10% discount for booking 4 or more consecutive hours: $140 x 10% = $14
        </li>

        <li>Total cost: $140 - $14 = $126 </li>
      </ul>

      <p>Please note that these rates are subject to change. For the most current rates, please contact us at support@theNannyNetwork.com.</p>
    </div>
    </main>
  );
}