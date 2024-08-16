'use client'
import Image from 'next/image';
import React from 'react'
const items = [
    {
        id: 1,
        name: "Item 1",
        image: "https://mytourtravelplan.netlify.app/_next/image?url=%2Fuploads%2Faustralia.png&w=1080&q=75"
    },
    {
        id: 2,
        name: "Item 2",
        image: "https://mytourtravelplan.netlify.app/_next/image?url=%2Fuploads%2Faustralia.png&w=1080&q=75"
    },
    {
        id: 3,
        name: "Item 3",
        image: "https://mytourtravelplan.netlify.app/_next/image?url=%2Fuploads%2Faustralia.png&w=1080&q=75"
    },
    {
        id: 4,
        name: "Item 4",
        image: "https://mytourtravelplan.netlify.app/_next/image?url=%2Fuploads%2Faustralia.png&w=1080&q=75"
    },
    {
        id: 5,
        name: "Item 5",
        image: "https://mytourtravelplan.netlify.app/_next/image?url=%2Fuploads%2Faustralia.png&w=1080&q=75"
    }
];
function MultivisitLocation() {
  return (
    <>
    <div className="section_outer">
        <div className="section_inner">
            <div className="section_wrapper">
                <h1>Must-Visit Locations</h1>
                <p>Explore the most exciting and essential destinations that should be on every traveler’s list.</p>

                <div className="multi_location_wrapper">
                    <div className="multi_location_wrapper">
                        {items.map((ele)=>{
                            return <div key={ele.id}>
                                <Image src={ele.image} alt="travel" height={200} width={200}/>
                                <h2>{ele.name}</h2>
                            </div>

                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default MultivisitLocation
