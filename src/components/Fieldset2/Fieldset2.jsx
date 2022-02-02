import { useEffect } from 'react';
import useAppContext from '../../Context/useAppContext'

import Legend from '../Legend/Legend';

import './fieldset2.css'

const Fieldset2 = ({data}) => {

    const {displayChange} = useAppContext()

    useEffect(() => {
        showHTMLContent()
    }, [displayChange]);

    let dataArray = data.items

    const showHTMLContent = () => {
        document.getElementById("f2-description").innerHTML = data.description;  
      }

    return (
            <fieldset id="fieldset-2">
                <Legend info={data}/>

                <span style={
                            (displayChange[1].layer)?
                            {display: "none"}:
                            {display: "block"}
                            }>
                    <div className='chloropleth'>
                        {dataArray.map((e, idx) => {
                            return (
                                <div key={idx} className='chloro-card'>
                                    <div className='chloro-color' style={{backgroundColor: e.color}} ></div>
                                    <div className='chloro-tag'>                         
                                        {e.name}
                                    </div>
                                </div>
                            )
                        })}             
                    </div>
                    <div className="f2-content" 
                            style={
                                (displayChange[1].content)?
                                {display: "block"}:
                                {display: "none"}
                            }>
                        <div id="f2-description"></div>
                        <a href="">Check the data</a>
                    </div> 
                </span>
            </fieldset>
    )
}

export default Fieldset2