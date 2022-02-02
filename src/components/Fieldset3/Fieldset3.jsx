import { useEffect } from 'react';
import useAppContext from '../../Context/useAppContext'

import Legend from '../Legend/Legend';

import './fieldset3.css'

const Fieldset3 = ({data}) => {

    const {displayChange} = useAppContext()

    useEffect(() => {
        showHTMLContent()
    }, [displayChange]);

    let dataArray = data.items

    const showHTMLContent = () => {
        document.getElementById("f3-description").innerHTML = data.description;  
      }

    return (
        <fieldset>
            <Legend info={data}/>
            
            <span style={
                    (displayChange[2].layer)?
                    {display: "none"}:
                    {display: "block"}
                    }>
                <ul className='conflict-list'>
                    {
                    dataArray.map((e, idx) => {
                        return (
                                <div key={idx} className='conflict'>
                                    <div className='dot' style={{color: e.color}}></div>
                                    <li  className='conflict-name'  >{e.name} </li>                      
                                </div>
                        )
                    })}                 
                </ul>
                <div className="f3-content" style={
                            (displayChange[2].content)?
                            {display: "block"}:
                            {display: "none"}
                            }>
                    <div id="f3-description"></div>
                    <a href="">Check the data</a>
                </div> 
            </span>
        </fieldset>
    )
}

export default Fieldset3