import image from './image.png';
import Card from 'react-bootstrap/Card';
const Cardd = ()=>{
    return(
        <div>
         <Card style={{ width: '18rem', margin:'0 auto' }}>
        <Card.Img variant="top" src={image} />
        </Card>
        </div>
    )
}

export default Cardd