import axios from "axios";
import {toast} from "react-toastify";
 
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Accept"] = "application/json";
  

function setJwt(jwt) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    setJwt,
};
