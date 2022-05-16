import React, { useState, useEffect} from 'react';
import { useNavigate} from "react-router";
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
    const navigate = useNavigate();
    const [headBN, setHeadBN] = useState(0);
    const [irrBN, setIrrBN] = useState(0);
    const [update, setUpdate] = useState(0);
    const [blocks, setBlocks] = useState([]);
    const [transactions, setTransactions] = useState([]);
    const [contents, setContents] = useState("");

    useEffect(()=> {
        setTimeout(()=>{setUpdate(update+1)}, 1000);

        axios
        .get('http://jungle.cryptolions.io:8888/v1/chain/get_info')
        .then((res)=>res.data)
        .then((data)=>{
            setHeadBN(data.head_block_num);
            setIrrBN(data.last_irreversible_block_num);
        });

    }, [update])

    useEffect(()=>{
        getBlocks();
        getTransactions();
    })

    const getBlocks = async () => {
        axios
        .get('http://localhost:4000/block')
        .then(res => res.data)
        .then((data)=>{
            setBlocks(data);
        })
    }

    const getTransactions = async () => {
        axios
        .get('http://localhost:4000/transaction')
        .then(res => res.data)
        .then((data)=>{
            setTransactions(data);
        })
    }

    const searchHdr = async () => {
        if(contents.length > 9){
            navigate('/transaction?' + contents);
        }
        else{
            navigate('/block?' + contents);
        }
    }

    return (
        <div className="Home" style={homeStyle}>
            <InputGroup className="mb-3" style={{width: "60%", margin: "50px"}}>
                <FormControl
                placeholder="Search by Block Number / Txn ID"
                aria-describedby="basic-addon2"
                value={contents}
                onChange={(e)=>{setContents(e.target.value);}}
                />
                <Button variant="outline-secondary" id="button-addon2"
                onClick={() => {searchHdr()}}>
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
                        onClick={() => {getBlocks()}}>
                            🔄
                        </span>
                    </h5>
                    <BlockList blocks={blocks}/>
                </Col>
                <Col style={colStyle}>
                    <h5>
                        Latest Transactions 
                        <span 
                        style={{cursor: "pointer"}}
                        onClick={() => {getTransactions()}}>
                            🔄
                        </span>
                    </h5>
                    <TransactionList transactions={transactions}/>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Home;