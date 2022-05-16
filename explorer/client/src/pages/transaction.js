import axios from 'axios';
import {useEffect, useState} from 'react';
import { CopyBlock, zenburn} from "react-code-blocks";
import { Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

var txStyle = {  
    display: "flex", 
    flexDirection : "column",
    textAlign: "left"
};


function Transaction() {
    const tx_id = document.location.search.slice(1);
    const [txInfo, setTxInfo] = useState({});
    const [txID, setTxId] = useState('');

    useEffect(async () => {
        getTxInfo();
    }, [])

    const getTxInfo = async () => {
        axios
        .get('http://localhost:4000/transaction/'+tx_id)
        .then(res => res.data)
        .then(data => {
            delete data._id
            setTxId(data.trx.id);
            setTxInfo(data);
        });
    }

    return (
        <div className='Transaction' style={txStyle}>
            <div style={{width: "80%", margin:"auto", float: "center"}}>
            <h4 style={{marginTop: "50px", marginBottom: "30px"}}>Transaction 
            <Badge pill bg="secondary">
            #{txID} 
            </Badge> 
            </h4>

                <CopyBlock
                    text={JSON.stringify(txInfo, null, 5)}
                    language="json"
                    theme={zenburn}
                    wrapLines={true}
                />
                </div>
        </div>
    )
}

export default Transaction;