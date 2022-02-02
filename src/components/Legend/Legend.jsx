import Buttons from '../Buttons/Buttons';
import Icon from '../Icon/Icon';

import './legend.css'

const Legend = (data) => {

    return(
        <legend>
                <div className="title">
                    <div className="title-content">
                        <Icon iconName="drag-dots"/>
                        <h4 className='title-name'>{data.info.name}</h4>
                    </div>
                    <div  className="title-buttons">
                        <Buttons data={data.info}/>
                    </div>
                </div>
        </legend>
    )
}

export default Legend