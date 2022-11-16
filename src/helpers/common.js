 // import OrderStatusEnum from "Enums/OrderStatusEnum"
import _ from "lodash"

 
export const API_BASE_URL_ENV = () => {
    return 'http://localhost:8000/api';
}

export const GET_AUTH_USER = () => JSON.parse(localStorage.getItem('auth'))

export const handleFieldChange = (e, setFormData, formData) => {
    setFormData({...formData, ...{[e.target.name]: e.target.value}})
}

export const handleSelectChange = (option, fieldName, setFormData, formData, cbFunc = {}) => {
    const optionValues = Array.isArray(option) ? option.map(({value}) => value) : option ? option.value : null
    setFormData({...formData, ...{[fieldName]: optionValues}})
    if (!_.isEmpty({cbFunc}))
        cbFunc[fieldName]
}
 

export const getLang = () => {
    return localStorage.getItem('meras_lang');
}


