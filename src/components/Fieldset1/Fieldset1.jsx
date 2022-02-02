import { useState, useEffect } from 'react'
import useAppContext from '../../Context/useAppContext'

import Legend from '../Legend/Legend';

import './fieldset1.css'

const Fieldset1 = ({data}) => {

const {displayChange} = useAppContext()

const [gradientStyle, setGradientStyle] = useState({})
const [labels, setLabels] = useState([])

useEffect(() => {
    getLabels()
    getColors()
    showHTMLContent()

}, [displayChange]);

let dataArray = data.items;

const getLabels = () => {
    let labelArray = []
    dataArray.forEach(e => {
        if (e.name){
            let content = (e.name)
            labelArray.push(content.toLowerCase()) 
        }
    });
    setLabels(labelArray)
}

let colorArray = []
dataArray.forEach(e => {
    colorArray.push(e.color)
});

let stringStyle = colorArray.join(", ")
const getColors = () =>{
    let style = {
        backgroundImage: `linear-gradient(to right, ${stringStyle})`
    }
    setGradientStyle(style)
}

const showHTMLContent = () => {
    document.getElementById("f1-description").innerHTML = data.description;  
  }
    return (
            <fieldset id="fieldset-1">
                <Legend info={data}/>

                <span style={
                (displayChange[0].layer)?
                {display: "none"}:
                {display: "block"}
                }>                  
                    <div id="gradient" className='bar' style={gradientStyle}></div>
                    <div className='f1-labels'>
                        <label className='f1-label'>{labels[0]}</label>
                        <label className='f1-label'>{labels[1]}</label>
                    </div>
                    <div className="f1-content" style={
                        (displayChange[0].content)?
                        {display: "block"}:
                        {display: "none"}
                        }>
                        <div id="f1-description"></div>
                        <a href="">Check the data</a>
                    </div>
                </span>
            </fieldset>        
    )
}

export default Fieldset1