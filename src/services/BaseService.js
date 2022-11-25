import http from "./HttpService";
import { getJwt } from "./Admin/AuthService";
import { API_BASE_URL_ENV } from "../helpers/common";

const apiDropdownEndpoint = API_BASE_URL_ENV() + "/common-module-api/dropdown";
const apiUploadEndpoint = API_BASE_URL_ENV() + "/common-module-api/upload";
const apiUploadOtherEndpoint =
  API_BASE_URL_ENV() + "/common-module-api/upload/other";

export default class BaseService {
  apiEndpoint;

  constructor(apiEndPoint) {
    http.setJwt(getJwt());
    this.apiEndpoint = apiEndPoint;
  }

  entityUrl(params = []) {
    return `${this.apiEndpoint}/${params.join("/")}`;
  }

  dropDownUrl(model) {
    return `${apiDropdownEndpoint}/${model}`;
  }

  getList(params) {
    return http.get(this.apiEndpoint, { params });
  }

  find(id) {
    return http.get(this.entityUrl([id]));
  }

  create(data) {
    return http.post(this.apiEndpoint, data);
  }

  update(id, data) {
    const body = { ...data };

    return http.put(this.entityUrl([id]), body);
  }

  toggleStatus(id, params = []) {
    return http.get(this.entityUrl([id, "toggle-activation"]), { params });
  }

  getDropDown(model, params = []) {
    return http.get(this.dropDownUrl(model), { params });
  }

  remove(id) {
    return http.delete(this.entityUrl([id]));
  }

  postUpload(selectedFile) {
    const formData = new FormData();
    formData.append("selectedFile", selectedFile);
    return http.post(apiUploadEndpoint, formData);
  }
  postUploadOther(selectedFile) {
    const formData = new FormData();
    formData.append("selectedFile", selectedFile);
    return http.post(apiUploadOtherEndpoint, formData);
  }
}
