import axios from "axios";

const QUIZ_BASE = "http://localhost:8080/user";

class UserService {
    getAllUsers() {
        return axios.get(QUIZ_BASE);
    }
    addUser(userData) {
        return axios.post(QUIZ_BASE, userData);
    }
}   

export default new UserService();