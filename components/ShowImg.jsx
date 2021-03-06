import Image from 'next/image'
import React from 'react'
import {useRouter} from 'next/router'

const BASE_URL = 'https://image.tmdb.org/t/p/original';

const ShowImg = ({info}) => {
    const router = useRouter(); 
    
    return (
    <div className='w-screen top-[-70px] px-3 my-10 flex flex-wrap justify-center'>
       {info.map((item) => (
        <div 
        className='flex flex-col m-5 cursor-pointer items-center justify-center'
        key={item.id} 
        onClick={() => router.push(`/show/${item.id}`)}>
            <Image src={`${BASE_URL}${item.poster_path}` } 
            width={330} height={500} alt='poster'
            />
            <h2 className='flex w-[330px] '>{item.title || item.name}</h2>
        </div>
    )
        )}
        
    </div>
  )
}

export default ShowImg