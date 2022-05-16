import { useNavigate} from "react-router";
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function BlockList({blocks}) {
    const navigate = useNavigate();

    const blockHdr = (block_num) => {
        navigate('/block?' + block_num)
    }

    return (
        <div className='BlockList'>
            <Table bordered hover>
            <thead>
                <tr>
                <th>Num</th>
                <th>Producer</th>
                <th>Timestamp</th>
                </tr>
            </thead>
            <tbody>
                {
                    blocks.map((block)=>{
                        return (
                            <tr key={block._id}
                                onClick={() => {blockHdr(block._id)}}>
                                <td>{block._id}</td>
                                <td>{block.producer}</td>
                                <td>{block.timestamp}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
            </Table>

        </div>
    )
}

export default BlockList;