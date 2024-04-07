import { React, useState } from "react";
import { Link } from "react-router-dom";
import useAuthContext from "../contexts/AuthContext";
//import  axios  from "../api/axios"


export default function Regisztracio() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");
    
    const { loginReg, errors } = useAuthContext();
    
        const handleSubmit = async (e) => {
            e.preventDefault();
    
            //Összegyűjtjük egyetlen objektumban az űrlap adatokat
            const adat = {
                name: name,
                email: email,
                password: password,
                password_confirmation: password_confirmation,
            };


            loginReg(adat, "/register");
            
        };

        

    return (
        <div className="m-auto" style={{ maxWidth: "400px" }}>
            <h1 className="text-center">Regisztráció</h1>
            <form onSubmit={handleSubmit}>
            <div className="mb-3 mt-3">
                    <label htmlFor="name" className="form-label">
                        Név:
                    </label>
                    <input
                        type="name"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        className="form-control"
                        id="name"
                        placeholder="teljes név"
                        name="name"
                    />
                </div>
                <div>
                    {errors.email && (
                            <span className="text-danger">{errors.name[0]}</span>
                        )}
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">
                        Email:
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        className="form-control"
                        id="email"
                        placeholder="e-mail cím"
                        name="email"
                    />
                </div>
                <div>
                    {errors.email && (
                            <span className="text-danger">{errors.email[0]}</span>
                        )}
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">
                        Jelszó:
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}

                        className="form-control"
                        id="pwd"
                        placeholder="jelszó"
                        name="pwd"
                    />
                    <div>
                        {errors.password && (
                                <span className="text-danger">
                                    {errors.password[0]}
                                </span>
                            )}
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">
                        Jelszó még egyszer:
                    </label>
                    <input
                        type="password"
                        value={password_confirmation}
                        onChange={(e) => {
                            setPasswordConfirmation(e.target.value);
                        }}

                        className="form-control"
                        id="pwd2"
                        placeholder="jelszó ismét"
                        name="pwd2"
                    />
                    <div>
                        {errors.password_confirmation && (
                                <span className="text-danger">
                                    {errors.password_confirmation[0]}
                                </span>
                            )}
                    </div>
                </div>

                <div className=" text-center">
                    <button type="submit" className="btn btn-primary w-100">
                        Regisztrálok
                    </button>

                    <p>
                        Már regisztrált?
                        <Link className="nav-link text-info" to="/bejelentkezes">
                            Bejelentkezés
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
}