import { HiStar } from 'react-icons/hi';
import { useState } from 'react';

export default function Componentstar({disabled, star=0, setStar}){
    return(
        <div className={disabled ?'flex flex-row justify-center w-full' : 'flex flex-row w-full'}>
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