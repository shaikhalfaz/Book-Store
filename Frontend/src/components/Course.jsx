// eslint-disable-next-line no-unused-vars
import React from 'react'
import list from '../../public/list.json'
import Cards from '../components/Cards'
import { Link } from 'react-router-dom'

function Course() {
  return (
    <>
    <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
            <h1 className="text-3xl  md:text-4-xl">
                We're delighted to have you
                <span className="text-pink-500"> Here! :)</span>
            </h1>
            <p className="mt-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nihil inventore labore molestias quisquam vel magni id sit non at. Illum minima perferendis dolores est veritatis eius voluptatibus modi soluta?
            Corrupti molestias, obcaecati inventore doloribus hic temporibus alias, recusandae laudantium doloremque omnis labore reprehenderit possimus facere in, 
            saepe voluptate quos quasi nostrum natus fugiat soluta! Earum cupiditate vero corrupti quidem.</p>
            <Link to="/">
            <button className="mt-6 cursor-pointer bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                Back</button>
            </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {
                list.map((item)=>(
                    <Cards key={item.id} item={item} />
                ))
            }
        </div>
    </div>
    </>
  )
}

export default Course
