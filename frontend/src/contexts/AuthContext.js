import { createContext, useContext, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    

    const csrf = async () => {
        try{
            const response = await axios.get("/token")
            console.log(response);
            if (response) {
                return response.data;
            } else {
                console.error('Response is undefined');
                return null;
            }
        } catch (error) {
            console.error('Axios error:', error);
            return null;
        }
        };

    const getUser = async () => {
        const { data } = await axios.get("/api/user")
        .catch(error => {
            console.error('Axios error:', error);
          });;
        setUser(data);
    };
    const logout = async () => {
        const token = await csrf()
        console.log(token)
        axios.post("/logout",{_token:token})
        .catch(error => {
            console.error('Axios error:', error);
          })
        .then((resp) => {
            setUser(null);
            console.log(resp);
        })
    };
    
    const loginReg = async ({ ...adat }, vegpont) => {
        const token = await csrf();
        console.log(token)
        adat._token = token;
        console.log(adat)
        try {
            await axios.post(vegpont, adat)
            .catch(error => {
                console.error('Axios error:', error);
              });;
            console.log("siker");
            await getUser();
            navigate("/");
        } catch (error) {
            console.log(error);
            if (error.response.status === 422) {
                setErrors(error.response.data.errors);
            }
        }
    };

    return (
        <AuthContext.Provider
            value={{ logout, loginReg, errors, getUser, user }}
        >
            {children}
        </AuthContext.Provider>
    );
};
export default function useAuthContext() {
    return useContext(AuthContext);
}