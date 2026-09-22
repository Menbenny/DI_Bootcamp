
import { useParams, Link, useNavigate } from 'react-router-dom'

const Product = (props) => {
    const params = useParams;
    const navigate = useNavigate();

    return (
        <>
            <h2>product number {params.id}</h2>
            <Link to='/shop'>Shop</Link>
            <div>
                <button onClick={() => toPhone()}>Navigate to Phone</button>
            </div>
        </>
    );
};