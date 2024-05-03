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
        this.api_url = process.env.NODE_ENV === "development" ? "https://aradee.universalairproducts.com/api" : `https://aradee.universalairproducts.com/api`;
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

    forgotPassword = (data) => {
        return this.init().post("/admin/auth/forgot-password", data)
    }

    verifyForgotPsw = (data) => {
        return this.init().post("/admin/auth/verify-forgot-password", data)
    }

    resetPsw = (data) => {
        return this.init().post("/admin/auth/reset-password", data)
    }

    getProfile = (data, config) => {
        return this.init().get("/admin/auth/whoAmI", data)
    }

    //Categories

    getCategories = (data, config) => {
        return this.init().get("/admin/category", data)
    }
    addCategories = (data, config) => {
        return this.init().post("/admin/category/new", data)
    }
    editCategories = (data, config) => {
        return this.init().put(`/admin/category/${data._id}`, data)
    }
    fileUpload = (data, config) => {
        return this.init('multipart/form-data').post("/admin/uploadFile", data)
    }
    deleteData = (data, config) => {
        return this.init('multipart/form-data').delete(`/admin/category/${data._id}`, data)
    }

    //subCategories

    subCategories = (data, config) => {
        return this.init('multipart/form-data').get(`/admin/sub-category/${data._id}`, data)
    }
    addSubCategories = (data, config) => {
        return this.init('multipart/form-data').post("/admin/sub-category/new", data)
    }
    editSubCategories = (data, config) => {
        return this.init('multipart/form-data').put(`/admin/sub-category/${data._id}`, data)
    }
    deleteSubCategories = (data, config) => {
        return this.init().delete(`/admin/sub-category/${data._id}`, data)
    }

    //Subscription

    getSubscription = (data, config) => {
        return this.init().get("/admin/subscription", data)
    }
    addSubscription = (data, config) => {
        return this.init().post("/admin/subscription/new", data)
    }
    editSubscription = (data, config) => {
        return this.init().put(`/admin/subscription/${data._id}`, data)
    }
    deleteSubscription = (data, config) => {
        return this.init().delete(`/admin/subscription/${data._id}`, data)
    }

    //AdminUser

    getAdminUser = (data, config) => {
        return this.init().get("/admin/user", data)
    }
    addAdminUser = (data, config) => {
        return this.init('multipart/form-data').post("/admin/user/new", data)
    }
    editAdminUser = (data, config) => {
        return this.init('multipart/form-data').put(`/admin/user/edit/${data._id}`, data)
    }
    deleteAdminUser = (data, config) => {
        return this.init().delete(`/admin/user/delete/${data._id}`, data)
    }
    adminChangePassword = (data, config) => {
        return this.init().put(`/admin/user/update-pwd/${data._id}`, data)
    }
}

const api = new Api();

export default api