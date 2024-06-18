import React, { useEffect, useState } from 'react'
import '../styles/Card.css'

const Card = () => {
    const [ cars, setCars ] = useState([]);

    useEffect(() => {
        fetch("/api/cars")
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

    const displayedCars = cars.map((car) => {
        return(
            <div key={car.id} className='card_container'>
                <img src={car.image} alt={car.name}/>
                <li className='car_list'>
                    <p className="name">{car.name}</p>
                    <p className="manufacturer">{car.manufacturer}</p>
                    <p className="y.o.m">{car.y.o.m}</p>
                    <p className="description">{car.description}</p>
                    <p className='condition'>{car.condition}</p>
                </li> 
            </div>
        )
    });
  return (
    <>
        {displayedCars}
    </>
  )
}

export default Card