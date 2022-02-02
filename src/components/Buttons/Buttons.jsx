import { useState } from 'react'
import useAppContext from '../../Context/useAppContext'

import Icon from '../Icon/Icon'

import './buttons.css'

const Buttons = ({data}) => {

    const  {toggleContentDisplay, toggleLayerDisplay} = useAppContext()

    const [hide, setHide] = useState(true)
    const [rotate, setRotate] = useState(false)
    
    const showContent = () =>{
        setRotate(!rotate)
        toggleContentDisplay(data.id)
    }
    const showLayer = () =>{
        setHide(!hide)
        toggleLayerDisplay(data.id)
    }
    return(
        <div className="buttons">
            {
                hide?
                <a onClick={showLayer} className='icon'>
                    <Icon iconName="hide"/>
                </a>:
                <a  onClick={showLayer} className='icon'>
                    <Icon iconName="show"/>
                </a>
            }
            <a>
                <Icon iconName="info"  className='icon'/>
            </a>
            <a style={
                    rotate?
                    {transform: "rotate(180deg)"}:
                    {transform: "rotate(0deg)"}
                } 
                onClick={showContent}  className='icon'>
                <Icon iconName="arrow-down"/>
            </a>
        </div>
    )
}

export default Buttons