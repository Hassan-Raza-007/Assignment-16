import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MediaCard from '../components/Card';

const Home = () => {
    const [product, setproduct] = useState([])

    const getData = () => {
        const data = axios.get('https://fakestoreapi.com/products').then((res) => {
            // console.log(res.data)
            setproduct(res.data)
        }).catch((err) => {
            console.log(err)
        })
    };

    useEffect(() => {
        getData()
    }, []);

    // console.log(product)
    return (
        <div className='flex flex-wrap'>
            {product.map((cur_obj, cur_ind) => {
                // console.log(cur_obj)
            return(<MediaCard id={cur_obj.id} image={cur_obj.image} rating={cur_obj.rating.rate} title={cur_obj.title} desc={cur_obj.description} key={cur_ind} price={cur_obj.price} />)
            })}
        </div>
    )
}

export default Home