import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=5000";

export default {
    Employees: function () {
        return axios.get(BASEURL);
    }
}