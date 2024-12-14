import React from 'react'
import About from '../components/about';
import About1 from '../components/about1';
import About2 from '../components/about2';
import { ConferenceTimeline } from '../components/conference-timeline';
const page = () => {
    return (
        <div>
            <ConferenceTimeline />
            <About />
            <About1 />
            <About2 />
        </div>
    )
}

export default page
