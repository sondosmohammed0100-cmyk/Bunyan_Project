
import { Link } from "react-router-dom";
function TableDashboard({header,addbtn}) {
    return (
        <div className="container">
            <div className="d-flex justify-content-between mb-3 align-items-center">
                <h3>{header}</h3>
                <Link to="add" className="btn btn-primary">Add New {addbtn}</Link>
            </div>


            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>John</td>
                        <td>Doe</td>
                        <td>@social</td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
};
export default TableDashboard;