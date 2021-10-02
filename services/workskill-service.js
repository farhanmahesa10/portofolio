import axios from "axios";
const Get = () => {
    const data = axios.get(process.env.BASE_API_URL + "/workskill/get");
    return data;
}

const Store = (req) => {
    const data = axios.post(process.env.BASE_API_URL + "/workskill/store", req);
    return data;
}

const Update = (req) => {
    const data = axios.put(process.env.BASE_API_URL + "/workskill/update/" + req.id, req);
    return data;
}

const Destroy = (id) => {
    const data = axios.delete(process.env.BASE_API_URL + "/workskill/delete/" + id);
    return data;
}
const WorkSkillService = { Get, Store, Update, Destroy };
export default WorkSkillService;