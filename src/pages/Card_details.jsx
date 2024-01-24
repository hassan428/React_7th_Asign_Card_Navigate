import { Button, Rating, Stack, Typography } from '@mui/material'
import React from 'react'
import { LiaOpencart } from 'react-icons/lia'
import { data } from '../utils/data.jsx'
import { useNavigate, useParams } from 'react-router-dom'
import { TiArrowBack } from "react-icons/ti";
import { FaFacebookF, FaRegHeart } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGooglePlusG, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
const Card_details = () => {
    const param = useParams();
    const navigate = useNavigate()
    // console.log(param)
    const back = () => {
        navigate("/")
    }
    let selected_card_details = data.filter((obj) => {
        return param.id == obj.id
    })
    // console.log(selected_card_details)

    const { category, description, image, price, rating, title } = selected_card_details[0];
    let real_price = Math.round(price * 2 / 1.5);
    let percent_off = Math.round((real_price - price) / real_price * 100);


    return (<>
        <h1 className='text-3xl sm:p-2 sticky top-16'><TiArrowBack className='cursor-pointer' onClick={back} /></h1>
        <div className='sm:flex items-center sm:m-5 m-3 sm:space-x-10 '>

            <img src={image} className='sm:w-2/5 sm:min-h-96 sm:max-h-96 max-h-72 min-h-72 m-auto' alt="" />
            <div className='flex-col space-y-5 my-10 sm:m-0 sm:w-2/5'>
                <h1 className='sm:text-4xl text-2xl font-bold'>{title}</h1>
                <h1>{description}</h1>
                <Stack sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "start", gap: 0.5 }}>
                    <Typography component="legend">{rating.rate}</Typography>
                    <Rating name="read-only" size="medium" value={rating.rate} readOnly />
                </Stack>
                <h1 className='text-xl sm:text-2xl'><strong> Rs.{price}</strong> <del>Rs.{real_price}</del> <span className="text-base italic text-green-900">{percent_off}<sup>%</sup>off</span> </h1>
                <h1 className=''>Categories: <strong className='cursor-pointer'>{category}</strong></h1>

                <Button sx={{
                    padding: "2px 5px",
                    fontSize: "x-small",
                    textAlign: "center",
                    backgroundColor: "white",
                    color: "black",
                    ":hover": {
                        color: "white",
                        backgroundColor: "orange",
                    }
                }} variant="contained" startIcon={<LiaOpencart />}>
                    Add to Cart
                </Button>

                <div className='flex space-x-2 text-xs sm:text-base'>
                    <div className='p-1 cursor-pointer hover:bg-blue-600 hover:text-white rounded-full' >
                        <FaFacebookF />
                    </div>
                    <div className='p-1 cursor-pointer hover:bg-emerald-400 hover:text-white rounded-full' >
                        <FaXTwitter />
                    </div>
                    <div className='p-1 cursor-pointer hover:bg-emerald-600 hover:text-white rounded-full' >
                        <FaLinkedinIn />
                    </div>
                    <div className='p-1 cursor-pointer hover:bg-red-500 hover:text-white rounded-full' >
                        <FaGooglePlusG />
                    </div>
                    <div className='p-1 cursor-pointer hover:bg-red-500 hover:text-white rounded-full' >
                        <MdEmail />
                    </div>

                    <div className='flex hover:text-blue-500 items-center cursor-pointer' >
                        <FaRegHeart />
                        <h1> ADD TO WISHLIST</h1>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export { Card_details }