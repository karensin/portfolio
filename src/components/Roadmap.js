import React from 'react';
import Timeline from './Timeline.js';



function Roadmap() {
    return (
        <div >
            <div className='pageTitle roadMap'> My Road Map to Success </div>

            <p className=' roadMap p' >
                Our experiences shape our future and my experiences have prepared me a strong mindset and resilience for future obstacles </p>

            <div className="projectsWrapper  ">
                <Timeline />
            </div>


        </div >)

}
export default Roadmap;