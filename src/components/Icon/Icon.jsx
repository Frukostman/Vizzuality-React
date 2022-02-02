import './icon.css'

const Icon = ({iconName}) => {

    let route = require(`../../assets/${iconName}.svg`);

    return(
            <img id={iconName} src={route} className="icon" alt={iconName}/>
    )
}

export default Icon