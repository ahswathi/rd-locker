import axios from "axios";
import FormData from "form-data";

const getToken = async () => {
    try {
        const token = localStorage.getItem("token");
        return token;
    } catch (error) {
        return null;
    }
};

class Api {
    constructor() {
        this.client = null;
        this.api_url = process.env.NODE_ENV === "development" ? "https://aradee-backend.vercel.app/api" : `https://aradee-backend.vercel.app/api`;
        // this.api_url = process.env.NODE_ENV === "development" ? "http://localhost:5000/api" : `https://aradee-backend.vercel.app/api`;
    }

    init = (type) => {

        let headers;

        headers = {
            Accept: "application/json",
        }

        if (type === "multipart/form-data") {
            headers = {
                'Content-Type': 'multipart/form-data',
            }
        }

        this.client = axios.create({
            baseURL: this.api_url,
            timeout: 31000,
            headers: headers,
        });

        this.client.interceptors.request.use(async (config) => {
            const token = await getToken();

            config.headers["Authorization"] = `Bearer ${token}`
            return config;
        }, (error) => {
            throw error;
        })

        return this.client;
    };


    // login
    login = (data, config) => {
        return this.init().post("/admin/auth/login", data)
    }

    login2FA = (data, config) => {
        return this.init().post("/admin/auth/login-2FA", data)
    }

    getProfile = (data, config) => {
        return this.init().get("/admin/auth/whoAmI", data)
    }

}

const api = new Api();

export default api