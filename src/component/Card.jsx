import React from "react"
import { FaRegHeart } from "react-icons/fa6";
import { LiaOpencart } from "react-icons/lia";
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Button, Stack } from "@mui/material";


const Card = (props) => {

  const { src, category, title, rating, price, onclick } = props;
  let real_price = Math.round(price * 2 / 1.5);
  let percent_off = Math.round((real_price - price) / real_price * 100);

  return (<>
    <div onClick={onclick} className="p-2 border border-gray-400 rounded-lg m-1 sm:m-2">
      <div className="relative">
        <img src={src} className="max-h-44 min-h-44" alt="" />

        <div className="flex justify-end cursor-pointer">
          <div className="absolute bottom-2 rounded-full p-1 bg-white hover:bg-pink-600  text-pink-600 hover:text-white font-black ">
            <FaRegHeart />
          </div>
        </div>
      </div>


      <div className="flex-col justify-between  space-y-1 mt-2 cursor-pointer">
        <h1 className="text-xs xl:text-sm text-center">
          {category}
        </h1>

        <h1 className="text-xs sm:text-sm xl:text-base cursor-pointer min-h-12 max-h-12 sm:min-h-14 sm:max-h-14 xl:min-h-16 xl:max-h-16 overflow-hidden">
          {title}
        </h1>

        <Stack sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "start", gap: 0.5 }}>
          <Typography component="legend">{rating.rate}</Typography>
          <Rating name="read-only" size="small" value={rating.rate} readOnly />
        </Stack>

        <h1 className="text-xs sm:text-sm xl:text-base cursor-pointer">
          Rs.<strong>{price}</strong> <del>{real_price}</del> <span className="text-xs italic text-green-900">{percent_off}<sup>%</sup>off</span>
        </h1>

        <Button sx={{
          padding: "2px 5px",
          fontSize: "x-small",
          textAlign: "center",
          width: "100%",
          backgroundColor: "white",
          color: "black",
          ":hover": {
            color: "white",
            backgroundColor: "orange",
          }
        }} variant="contained" startIcon={<LiaOpencart />}>
          Add to Cart
        </Button>
      </div>

    </div>
  </>)
}

export { Card }
