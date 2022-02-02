import { useState, useEffect } from 'react';
import useAppContext from '../../Context/useAppContext'

import Legend from '../Legend/Legend';

import './fieldset4.css'

const Fieldset4 = ({data}) => {

    const {displayChange} = useAppContext()

    const [dates, setDates] = useState([])
    const [timelineStyle, setTimelineStyle] = useState([])

    useEffect(() => {
        showHTMLContent()
        formatDates()
        getTimeline()
    }, [displayChange]);

    const showHTMLContent = () => {
        document.getElementById("f4-description").innerHTML = data.description;  
    }

    const getTimeline = () =>{
        let style = {
            color: `red`
        }
        setTimelineStyle(style)
    }

    const formatDates = () =>{
        let dateFormat = data.timeline.dateFormat
        let maxYear = ((data.timeline.maxDate).slice(0,dateFormat.length))
        let minYear = ((data.timeline.minDate).slice(0,dateFormat.length))
        let newDates = [minYear, maxYear]      
        setDates([...newDates])
    }
    

    return (
        <fieldset>
            <Legend info={data}/>

            <span style={
                (displayChange[3].layer)?
                {display: "none"}:
                {display: "block"}
                }>
                <div className='timeline-container'>
                    <div className='timeline' style={timelineStyle}>
                        <div className='speed' style={{width: `${data.timeline.speed}px`}}></div>
                    </div>
                    <div className='f4-labels'>
                        <label className='f4-label'>{dates[0]}</label>
                        <label className='f4-label'>{dates[1]}</label>
                    </div>
                </div>
                <div className="f4-content" style={
                        (displayChange[3].content)?
                        {display: "block"}:
                        {display: "none"}
                        }>
                    <div id="f4-description"></div>
                    <a href="">Check the data</a>
                </div>
            </span>
        </fieldset>
    )
}

export default Fieldset4