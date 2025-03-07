import React from 'react'

function ServiceDetail({name, desc, img1, img2, img3, img4}) {
    return (
        <div>
            <h1>{name}</h1>

        <p>{desc}</p>
            <h2>services which he offer</h2>
            <img src={img1}  />
            <img src={img2}  />
            <img src={img3}  />
            <img src={img4}  />

        </div>
    )
}

export default ServiceDetail