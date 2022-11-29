import BaseService from "../BaseService";
import http from "../HttpService";
import { API_BASE_URL_ENV } from "../../helpers/common";

const apiEndpoint = API_BASE_URL_ENV() + "/admin/skill/questions";
 
export default class extends BaseService {
    constructor() {
        super(apiEndpoint);
    } 

  
}
