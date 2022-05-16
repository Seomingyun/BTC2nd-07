import axios from 'axios';
import {useEffect, useState} from 'react';
import { CopyBlock, zenburn} from "react-code-blocks";
import { Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

var blockStyle = {  
    display: "flex", 
    flexDirection : "column",
    textAlign: "left"
};

function Block() {

    const blockNum = document.location.search.slice(1);
    const [blockInfo, setBlockInfo] = useState({});

    useEffect(async () => {
        getBlockInfo();
    }, [])

    const getBlockInfo = async () => {
        axios
        .get('http://localhost:4000/block/'+blockNum)
        .then(res => res.data)
        .then(data => {
            console.log(data);
            setBlockInfo(data);
        });
    }

    return (
        <div className='Block' style={blockStyle}>
            <div style={{width: "70%", margin:"auto", float: "center"}}>
            <h4 style={{marginTop: "50px", marginBottom: "30px"}}>Block 
            <Badge pill bg="secondary">
            #{blockNum} 
            </Badge> 
            </h4>

                <CopyBlock
                    text={JSON.stringify(blockInfo, null, 5)}
                    language="json"
                    theme={zenburn}
                    wrapLines={true}
                />
                </div>
        </div>
    )
}

export default Block;