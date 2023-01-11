import React from 'react'
import { Row, Col} from 'react-bootstrap';

export default function Home () {
  return (
    <>
   <div style={{ backgroundColor: '#ffa701', width: '100%'}}>
    <Row className="mx-auto" style={{ backgroundColor: '#ffa701', color: '#ffffff', width: '80%'}}>
      <Col lg="4">
          <h1 className="pt-5" style={{ fontSize: '4rem'}}>Welcome to the Nanny Network!</h1>
      </Col>
      <Col lg="8" style={{ objectFit: 'cover'}}> <img width="100%" src="https://res.cloudinary.com/mommy-nearest/image/upload/c_crop,h_355,w_800,x_0,y_32/c_scale,f_auto,fl_lossy,q_75,w_848/y78sdxwlhcfkcbadd3df" alt='reading-book'/>
      </Col>
    </Row>
    </div>
    <div style={{width: '100%', backgroundColor: '#ff6666'}}>
      <Row className="mx-auto" style={{ width: '80%'}}>
       <Col className="pt-5 px-5" style={{backgroundColor: '#ffffff'}}>
       <h2>Our Mission</h2>
        <p style={{fontSize: '25px'}}>Our mission at the Nanny Network is to provide reliable, trustworthy, and top-quality childcare services to families in our community. We believe that every child deserves the opportunity to learn, grow, and play in a safe and nurturing environment. We strive to create a positive and engaging experience for both children and parents, and to be a valuable resource for families in need of temporary or ongoing childcare. Our team of experienced and compassionate caregivers is dedicated to delivering exceptional service to our clients, and to building lasting relationships with the families we serve.</p>
       </Col>
       <Col className="py-5 px-5" style={{ backgroundColor: '#ff6666', color: '#ffffff'}}>
        <h2 style={{color: '#ffa701'}}>Benefits of Working with Us</h2>
        <ul>
          <li>
            <h4>Peace of mind:</h4> When you leave your child with one of our caregivers, you can have confidence that they will be in good hands. Our caregivers are screened, trained, and trusted professionals who are dedicated to providing high-quality childcare.
          </li><br></br>
          <li>
          <h4>Flexibility:</h4> We offer a range of services to meet the needs of families, including occasional babysitting, regular weekly care, and overnight care. This allows you to choose the option that works best for your schedule and needs.
          
          </li><br></br>
          <li>
            <h4>Convenience:</h4> We make it easy for you to book babysitting services online or through our app, so you can find a caregiver quickly and easily.
          </li><br></br>
          <li>
            <h4>Trustworthiness:</h4> Our caregivers are reliable and trustworthy, and we have systems in place to ensure that your child is always safe and well-cared for.
          </li><br></br>
          <li>
            <h4>Personalized care:</h4> We take the time to get to know your child and their unique needs, and our caregivers provide individualized attention and care.
          </li>
        </ul>
        </Col>  
     </Row>
     </div>
    </>
  )
}