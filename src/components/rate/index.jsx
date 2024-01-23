import { HiStar } from 'react-icons/hi';
<<<<<<< HEAD
import { useState } from 'react';

export default function Componentstar({disabled, star=0,setStar}){
    return(
        <div className='flex flex-row justify-center w-full'>
=======

export default function Componentstar({disabled, star=0, setStar}){
    return(
        <div className={disabled ?'flex flex-row justify-center w-full' : 'flex flex-row w-full'}>
>>>>>>> f8652c36cbb17ad34ecc261090b05f65d3f84569
            {[...Array(5)].map((v, index) => {
                return (
                    <div key={index}>
                        <HiStar
                            size={30}
                            onClick={() =>disabled?null:setStar(index + 1)}
                            className={index + 1 > star ? 'text-gray-600' : 'text-yellow-500'}
                        />
                    </div>
                );
            })}
        </div>
    )
}