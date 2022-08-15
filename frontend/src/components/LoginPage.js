import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import PageIntro from "./Common/PageIntro";

function LoginPage() {

    const navigate = useNavigate();

    const pageIntroProps = {
        title: "Prijava za agente",
        subtitle: "U slucaju da nemate nalog, obratite se menadzmentu",
        pathLabel: "Prijava"
    }

    const {user, setUser} = useContext(UserContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user]);

    function handleFormSubmit(event) {
        event.preventDefault();

        axios.post("http://localhost:1337/api/auth/local", 
                {
                    identifier: username,
                    password
                })
            .then(response => {
                setError(null);
                setUser(response.data); 
            })
            .catch(error => {
                setError(error);
            });
    }

    return (
        <>
            <PageIntro data={pageIntroProps} />
            <div className="row mb-5">
            <div className="col-md-3"></div>
                <div className="col-md-6">
                    <form onSubmit={handleFormSubmit}>
                        <div className="mb-3">
                            <label htmlFor="userName" className="form-label">Korisnicko ime</label>
                            <input type="text" className="form-control" id="userName" aria-describedby="userName" value={username} onChange={(event) => setUsername(event.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Lozinka</label>
                            <input type="password" className="form-control" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                        </div>

                        {error && 
                        <div className="text-danger mb-3">
                            Neispravno korisnicko ime ili lozinka
                        </div>
                        }

                        <button className="btn btn-b-n">Prijava</button>
                    </form>
                </div>
            </div>
        </>
    )
}


export default LoginPage;
