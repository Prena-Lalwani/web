import './Trip.css'
import React from 'react'
import TripData from './TripData'
import Trip1 from '../assets/5.jpg'
import Trip2 from '../assets/6.jpg'
import Trip3 from '../assets/8.jpg'

export default function Trip() {
    return (
            <div className='trip'>
                <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className='tripcard'>
                <TripData
                    image={Trip1}
                    heading ="Trip in Venice"
                    text="Venice, Italy, known for its canals and historic architecture, offers a unique and enchanting experience. Visitors can explore its winding streets, museums, and art galleries, and enjoy a romantic gondola ride along the Grand Canal. Venice's beauty and cultural richness make it a truly unforgettable destination."
                />
                <TripData
                    image={Trip2}
                    heading ="Trip in Indonesia"
                    text="Malaysia, in Southeast Asia, boasts diverse landscapes, vibrant cities, and a rich cultural heritage. From Kuala Lumpur's modern skyline to Langkawi's pristine beaches, it offers a range of experiences. Explore ancient rainforests, historic temples, and savor multicultural street food, all in a warm and welcoming atmosphere."
                />
                <TripData
                    image={Trip3}
                    heading ="Trip in Malaysia"
                    text="Malaysia, in Southeast Asia, boasts diverse landscapes, vibrant cities, and rich cultural heritage. From Kuala Lumpur's modern skyline to Langkawi's pristine beaches, Malaysia offers a range of experiences. Explore ancient rainforests, historic temples, and savor multicultural street food, all in a warm and welcoming atmosphere."
                />
            </div>
            </div>


    )
}
