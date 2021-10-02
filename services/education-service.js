import axios from "axios";
const Get = () => {
    const data = axios.get(process.env.BASE_API_URL + "/education/get");
    return data;
}

const Store = (req) => {
    const data = axios.post(process.env.BASE_API_URL + "/education/store", req);
    return data;
}

const Update = (id, req) => {
    const data = axios.put(process.env.BASE_API_URL + "/education/update/" + id, req);
    return data;
}

const Destroy = (id) => {
    const data = axios.delete(process.env.BASE_API_URL + "/education/delete/" + id);
    return data;
}


const EducationService = { Get, Store, Update, Destroy };
export default EducationService;