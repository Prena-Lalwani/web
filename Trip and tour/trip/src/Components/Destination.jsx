import React from 'react'
import "./Destination.css"
import DestinationData from './DestinationData'
import Mountain1 from '../assets/1.jpg'
import Mountain2 from '../assets/2.jpg'
import Mountain3 from '../assets/3.jpg'
import Mountain4 from '../assets/4.jpg'



export default function Destination() {
    return (
        <div className='destination'>
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame.</p>
            <DestinationData
            className ="first-des"
                heading="Saiful Malook, Pakistan"
                text="Saiful Malook in Pakistan's Kaghan Valley is a destination of unparalleled beauty and mystique. Legend has it that the lake is home to fairies who visit on full moon nights, enhancing its enchanting atmosphere. Surrounded by majestic mountains and verdant landscapes, the lake mirrors the stunning scenery, creating a mesmerizing setting for visitors. Whether trekking through the valley, camping under the starry sky, or simply enjoying the tranquility of the lake, Saiful Malook offers an unforgettable experience for nature enthusiasts and adventurers alike."    
                img1={Mountain1}
                img2={Mountain2}
           />
           <DestinationData
           className ="first-des-reverse"
                heading="The Eiffel Tower, France"
                text="
                The Eiffel Tower, located in Paris, France, is one of the most iconic structures in the world. Constructed between 1887 and 1889 as the entrance arch for the 1889 World's Fair, it has become a global symbol of France and a testament to human ingenuity in engineering and design. Standing at 330 meters tall, the Eiffel Tower offers breathtaking views of Paris from its three observation decks. Whether viewed during the day against the Parisian skyline or illuminated at night, the Eiffel Tower is a must-visit destination for anyone exploring the beauty and culture of Paris."    
                img1={Mountain3}
                img2={Mountain4}
           />

        </div>
    )
}
