import { useNavigate} from "react-router";
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function TransactionList({transactions}) {
    const navigate = useNavigate();

    const txHdr = (tx_id) => {
        navigate('/transaction?' + tx_id)
    }

    return (
        <div className='TransactionList'>
            <Table bordered hover>
            <thead>
                <tr>
                <th>ID</th>
                <th>Block</th>
                <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    transactions.map((tx)=>{
                        return (
                            <tr key={tx._id}
                                onClick={() => {txHdr(tx.trx.id)}}>
                                <td>{tx.trx.id.slice(0, 18) + '...'}</td>
                                <td>{tx.block_num}</td>                               
                                <td>{tx.status}</td>

                            </tr>
                        )
                    })
                }
            </tbody>
            </Table>

        </div>
    )
}

export default TransactionList;