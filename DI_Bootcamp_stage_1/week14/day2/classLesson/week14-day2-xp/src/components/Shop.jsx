import { Link } from 'react-router-dom';


const Shop = (props) => {
    return (
        <>
            <h2>My Shop</h2>
            <div>
                <h2>Product 1</h2>
                <p>$100</p>
                <Link to='/product/2233'>Buy Now</Link>
            </div>
            <div>
                <h2>Product 2</h2>
                <p>$200</p>
                <Link to='/product/4455'>Buy Now</Link>
            </div>
        </>
    );
}

export default Shop;