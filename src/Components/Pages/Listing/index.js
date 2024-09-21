import React from 'react'
import Sidebar from '../../Sidebae'
import Banner from '../../../images/slideBanner1.jpg'
import Button from '@mui/material/Button'
import { IoIosMenu } from 'react-icons/io'
import { TfiLayoutGrid4Alt } from 'react-icons/tfi'
import { TbGridDots } from 'react-icons/tb'
import { HiViewGrid } from 'react-icons/hi'
import { FaAngleDown } from 'react-icons/fa'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
// import ProductItem from '../../../Components/ProductItem'

const Listing = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [productView, setProductView] = useState('four')
  const openDropDown = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <section className="product_Listing_Page">
        <div className="container">
          <div className='productListing d-flex'>
            <Sidebar />
            <div className='content_right'>
              <img src={Banner} alt="" style={{ borderRadius: '8px' }} />

              <div className='showBy mt-3 mb-3 d-flex align-items-center'>
                <div className='btnWrapper d-flex align-item-center '>
                  <Button className={productView==='one' && 'act'} onClick={()=>setProductView('one')}><IoIosMenu /></Button>
                  <Button className={productView==='three' && 'act'} onClick={()=>setProductView('three')}><TbGridDots /></Button>
                  <Button className={productView==='four' && 'act'} onClick={()=>setProductView('four')}><TfiLayoutGrid4Alt /></Button>

                </div>
                <div className='ml-auto showByFilter'>
                  <Button onClick={handleClick}>Show 9 <FaAngleDown /></Button>
                  <Menu
                    className='w-100 showPerPage'
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={openDropDown}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem onClick={handleClose}>9</MenuItem>
                    <MenuItem onClick={handleClose}>18</MenuItem>
                    <MenuItem onClick={handleClose}>27</MenuItem>
                    <MenuItem onClick={handleClose}>45</MenuItem>
                  </Menu>
                </div>
              </div>

              <div className='productListing'>
                {/* <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/> */}
              </div>



              <div className='d-flex align-item-center justify-content-center mt-5'>
              <Pagination count={10} color="primary" size='large' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Listing