import axios from "axios";

class AuthService {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:5000',
    });


    this.api.interceptors.request.use((config) => {

      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  login = (requestBody) => {
    return this.api.post("/auth/login", requestBody);

  };

  signup = (requestBody) => {
    return this.api.post("/auth/register", requestBody);

  };

  verify = () => {
    return this.api.get("/auth/verify");

  };
}

// Create one instance (object) of the service
const authService = new AuthService();

export default authService;
