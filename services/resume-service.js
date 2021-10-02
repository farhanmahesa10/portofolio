import axios from "axios";
const Get = () => {
    const data = axios.get(process.env.BASE_API_URL + "/experience/get");
    return data;
}

const Store = (req) => {
    const data = axios.post(process.env.BASE_API_URL + "/experience/store", req);
    return data;
}

const Update = (id, req) => {
    const data = axios.put(process.env.BASE_API_URL + "/experience/update/" + id, req);
    return data;
}

const Destroy = (id) => {
    const data = axios.delete(process.env.BASE_API_URL + "/experience/delete/" + id);
    return data;
}
const ResumeService = { Get, Store, Update, Destroy };
export default ResumeService;