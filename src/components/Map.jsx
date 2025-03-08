import React from 'react'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'


function Map() {
    // map function
    // mapping the values/Data
    // index starting from 0
    // length starting from 1    
    const items = [
        { id: 1, c_name: "Watch", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s" },
        { id: 2, c_name: "Phone", img: img2 },
        { id: 3, c_name: "Buds", img: img3 },

    ];
    return (
        <div>
            <ul>
                {items.map((item) => (
                    <div key={item.id} className='main'>
                        <p>{item.c_name}</p>
                        <img src={item.img} width={100} height={100} />
                    </div>
                ))}
            </ul>
        </div >
    )
}

export default Map