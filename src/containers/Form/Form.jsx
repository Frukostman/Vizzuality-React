import { useState, useEffect } from 'react'
import useAppContext from '../../Context/useAppContext'

import Fieldset1 from '../../components/Fieldset1/Fieldset1'
import Fieldset2 from '../../components/Fieldset2/Fieldset2'
import Fieldset3 from '../../components/Fieldset3/Fieldset3'
import Fieldset4 from '../../components/Fieldset4/Fieldset4'
import Loading from '../../components/Loading/Loading'

import './form.css'

const Form = () => {

    const {loadDisplay} = useAppContext()

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

useEffect(() => {
    fetchData()
}, [loading]);

const fetchData = async () => {

    const URL = 'https://raw.githubusercontent.com/Vizzuality/front-end-code-challenge/master/data.json';
    const response = await fetch(URL)
    const result = await response.json()    
    setData(result)
    initialSettings(result)
    setLoading(false)
}

const initialSettings = (e) =>{
    let settings=[
        {content: false,
        layer:false,
        id: e[0].id},
        {content: false,
        layer:false,
        id: e[1].id},
        {content: false,
        layer:false,
        id: e[2].id},
        {content: false,
        layer:false,
        id: e[3].id},
    ]
    loadDisplay(settings)
}
    return (
        <form className='form-container'>
            {
                loading?
                <Loading/>:
                <>
                    <Fieldset1 data={data[0]} />
                    <Fieldset2 data={data[1]} />
                    <Fieldset3 data={data[2]} />
                    <Fieldset4 data={data[3]} />    
                </>
            }
        </form>
    )
}

export default Form