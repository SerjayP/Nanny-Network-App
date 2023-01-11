import { useParams } from 'react-router-dom'
// eslint-disable-next-line
import SitterData from "../data";
import { Row, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function SitterPage(props) {
  const { index } = useParams()
  console.log(index)

  return (
    <>
    <Link to="/sitters" style={{ textDecoration: 'none', color: 'white', paddingLeft: '25px', paddingTop: '25px'}}><img src="https://img.icons8.com/ios-filled/50/null/circled-left-2.png"/></Link>
    <main className="pt-3 pb-3">
         <div className="EmpHead">
        </div> 
    
     <img className="SitterIMG" src={SitterData[index].img} alt={SitterData[index].img} />
        <div>
      <h3>{SitterData[index].name}</h3>
      <h5>Age:</h5>
      <p>{SitterData[index].age}</p>
       <h5>Gender:</h5>
      <p>{SitterData[index].gender}</p>
      <h5>Education:</h5>
      <p>{SitterData[index].education}</p>
      <h5>Interest:</h5>
      <p>{SitterData[index].interest}</p>
      </div>
      </main>
    </>
  );
}