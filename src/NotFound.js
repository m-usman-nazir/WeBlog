import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>This page cannot be found</p>
            <br />
            <Link to="/">Back to the Home page...</Link>
        </div>
     );
}
 
export default NotFound;