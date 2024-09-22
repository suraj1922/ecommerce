import Button from '@mui/material/Button';
import Rating from "@mui/material/Rating";
import { TfiFullscreen } from "react-icons/tfi";
import { IoMdHeartEmpty } from 'react-icons/io';
import productItem from '../../images/product.avif'
const ProductItem = () => {
    <>
        <div className="item productItem">
            <div className="imgWrapper">
                <img src={productItem} alt="" />
                <span className="badge badge-primary">28%</span>
                <div className="actions">
                    <Button><TfiFullscreen/></Button>
                    <Button><IoMdHeartEmpty/></Button>
                </div>
            </div>
            <div className="info">
                <h4>Weather's Original Caramel Hard Candies</h4>
                <span className=" text-success d-block">In Stock</span>
                <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size='small' precision={0.5} />
                <div className="d-flex">
                    <span className="oldPrice">₹200</span>
                    <span className="netPrice text-danger ml-2">₹200</span>
                </div>
            </div>
        </div>
    </>
}

export default ProductItem