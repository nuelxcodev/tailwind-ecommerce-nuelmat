import React, { useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import Itemscard from './Itemscard'


export function Pagination({ group }) {

    const [currentPage, setcurrentPage] = useState(1)
    const numberofitems = 8


    const lastindex = currentPage * numberofitems
    const firstindex = lastindex - numberofitems

    const results = group.slice(firstindex, lastindex)
    const pages = Math.ceil(group.length / numberofitems)
    const pagenum = [...Array(pages + 1).keys()].slice(1)

    if (group.length === 0) return <div className='flex justify-center items-center h-[80vh]'>no item found</div>

    return (
        <div className=' w-full overflow-hidden '>
            <div className='
                pt-2
                md:pt-6
                mx-auto grid
                items-center 
                grid-cols-1 overflow-x-hidden
                sm:grid-cols-2 
                gap-2 md:grid-cols-3 
                lg:grid-cols-4 w-[100%]'>
                {
                    results.map((result, index) => <Itemscard key={index} product={result}></Itemscard>)
                }
            </div>
            <div className=' w-max mt-7 flex items-center justify-around '>

                <button onClick={() => setcurrentPage(currentPage => currentPage !== 1 ? currentPage - 1 : currentPage)}
                    className={`p-4 border-2 active:bg-gray-500 active:text-white ${currentPage === 1 ? " hidden" : " block"}`}> <AiOutlineLeft /></button>
                <div className=' flex justify-around'>
                    {
                        pagenum.map((page, index) => (
                            <div key={index} onClick={() => setcurrentPage(page)}
                                className={`px-4 py-2 rounded-sm ${currentPage === index + 1 ? " bg-gray-500 text-white" : " text-black"}`}>
                                {page}</div>
                        ))
                    }
                </div>
                <button onClick={() => setcurrentPage(currentPage => currentPage !== pages ? currentPage + 1 : currentPage)}
                    className={`p-4 border-2 active:bg-gray-500 active:text-white ${currentPage === pages ? " hidden" : " block"}`}> <AiOutlineRight /></button>

            </div>
        </div>
    )
}

