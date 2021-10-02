import axios from "axios";
const Get = () => {
    const data = axios.get(process.env.BASE_API_URL + "/hello/get");
    return data;
}

const Save = (req) => {
    const data = axios.post(process.env.BASE_API_URL + "/hello/save", req);
    return data;
}
const ChangeImage = (req) => {
    const data = axios.post(process.env.BASE_API_URL + "/hello/change-image", req);
    return data;
}

const HelloService = { Get, Save, ChangeImage };
export default HelloService;