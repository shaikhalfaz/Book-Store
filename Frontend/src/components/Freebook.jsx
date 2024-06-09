// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios"
// import list from "../../public/list.json";
import Cards from './Cards';

function Freebook() {
 
    const [book,setBook]=useState([])
    useEffect(() => {
        const getBook=async() => {
            try{
             const res = await axios.get("http://localhost:4001/book");
            
             const data = res.data.filter((data) => data.category === "Free");
             console.log(data);
             setBook(data);
            } catch (error) {
                console.log(error);
            }
        }
        getBook();
    }, []);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      
  return (
    <>
    <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4 ">
        <div>
      <h1 className="font-semibold text-xl pb-2">Free Offered Cources</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus nulla vel fuga ducimus ipsum autem quas nisi ipsa eos tempore corrupti, quibusdam distinctio, rem quaerat inventore? Perferendis reprehenderit voluptatibus fugiat.</p>
      </div>
    <div>
    <Slider {...settings}>
        {book.map((item)=>(
            <Cards item={item} key={item.id}/>
        ))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebook
