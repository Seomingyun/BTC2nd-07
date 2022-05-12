import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfoCard from '../components/infoCard';
import BlockList from '../components/blockList';
import TransactionList from '../components/transactionList';
import { InputGroup, FormControl, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

var homeStyle = {  
    display: "flex", 
    alignItems: "center", 
    flexDirection : "column"
};

var colStyle = {
    margin: "20px",
    paddingTop: "15px",
    paddingBottom: "5px",
    borderStyle: 'solid',
    borderColor: "rgba(74,90,116,0.3)",
    borderRadius: "5px"
};

function Home() {
    const [headBN, setHeadBN] = useState(0);
    const [irrBN, setIrrBN] = useState(0);
    const [update, setUpdate] = useState(0);

    useEffect(()=> {
        setTimeout(()=>{setUpdate(update+1)}, 1000);

        axios.get('http://jungle.cryptolions.io:8888/v1/chain/get_info')
             .then((res)=>res.data)
             .then((data)=>{
                setHeadBN(data.head_block_num);
                setIrrBN(data.last_irreversible_block_num);
             })
    }, [update])

    return (
        <div className="Home" style={homeStyle}>
            <InputGroup className="mb-3" style={{width: "60%", margin: "50px"}}>
                <FormControl
                placeholder="Search by Address / Txn Hash / Block"
                aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                Search
                </Button>
            </InputGroup>

            <InfoCard headBN={headBN} irrBN={irrBN} />

            <Container>
            <Row>
                <Col style={colStyle}>
                    <h5>Latest Blocks 
                        <span 
                        style={{cursor: "pointer"}}
                        onClick={() => console.log('ming')}>
                            🔄
                        </span>
                    </h5>
                    <BlockList />
                </Col>
                <Col style={colStyle}>
                    <h5>
                        Latest Transactions 
                        <span 
                        style={{cursor: "pointer"}}
                        onClick={() => console.log('ming')}>
                            🔄
                        </span>
                    </h5>
                    <TransactionList />
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Home;