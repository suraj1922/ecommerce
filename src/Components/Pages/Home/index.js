import sideBanner from "../../../images/banner2.jpg"
import Button from '@mui/material/Button'
import { IoIosArrowRoundForward } from "react-icons/io"
const Home = () =>{
    return(
        <>
        {/* <HomeBanner/> */}
        <section className="homeProducts">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="banner">
                        <img src={sideBanner} alt="" className="cursor w-100"/>
                        </div>
                    </div>
                    <div className="col-md-9 productRow">
                        <div className="d-flex align-item-center">
                            <div className="info w-75 ">
                                <h3 className="mb-0 hd">BEST SELLER</h3>
                                <p className="text-light text-sml mb-0">Do not miss the current offers until the end of March.</p>
                            </div>

                            <Button className="viewAllBtn">View all<IoIosArrowRoundForward/></Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}


export default Home