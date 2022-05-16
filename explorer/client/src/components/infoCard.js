import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

var cardStyle = {
    float: "left", 
    margin: "40px", 
    width: "240px"
};

function InfoCard({headBN, irrBN}) {
    return (
        <div className="InfoCard">
            <Card className="text-center" style={cardStyle}>
            <Card.Header>Network</Card.Header>
            <Card.Body>
                <Card.Title>Jungle</Card.Title>
            </Card.Body>
            </Card>

            <Card className="text-center" style={cardStyle}>
            <Card.Header>Head Block Number</Card.Header>
            <Card.Body>
                <Card.Title>{headBN}</Card.Title>
            </Card.Body>
            </Card>

            <Card className="text-center" style={cardStyle}>
            <Card.Header>Irreversible Block Number</Card.Header>
            <Card.Body>
                <Card.Title>{irrBN}</Card.Title>
            </Card.Body>
            </Card>

        </div>

        
    )
}

export default InfoCard;