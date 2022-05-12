import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function BlockList() {
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
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                </tr>
            </tbody>
            </Table>

        </div>
    )
}

export default BlockList;