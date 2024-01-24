import React from 'react'
import { data } from '../utils/data.jsx'
import { Card } from '../component/Card.jsx'
import { useNavigate, useParams } from 'react-router-dom'

const Render_card = () => {
    let navigate = useNavigate();
    const get_id = (id) => {
        navigate(`/product/${id}`)
        // console.log(id)
        // console.log(navigate)
    }

    return (<>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 mx-2">
            {data.map((obj, ind) => {
                const { image, category, price, rating, title, description, id } = obj

                return <Card key={ind} onclick={() => {
                   get_id(id);
                }} src={image} category={category} price={price} rating={rating} title={title} />

            })}
        </div>

    </>
    )
}

export { Render_card }