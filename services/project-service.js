import axios from "axios";
const Get = () => {
    const data = axios.get(process.env.BASE_API_URL + "/project/get");
    return data;
}

const Store = (req) => {
    const data = axios.post(process.env.BASE_API_URL + "/project/store", req);
    return data;
}

const Update = (id, req) => {
    const data = axios.put(process.env.BASE_API_URL + "/project/update/" + id, req);
    return data;
}

const Destroy = (id) => {
    const data = axios.delete(process.env.BASE_API_URL + "/project/delete/" + id);
    return data;
}

const BorderStyle = (number, total) => {
    let border = "";

    if (number <= total - 3) {
        border += "lg:border-b  ";
    }

    if ((number + 1) % 3 == 0) {
        border += "lg:border-r lg:border-l ";
    }

    return border;
}
const ProjectService = { Get, Store, Update, Destroy, BorderStyle };
export default ProjectService;