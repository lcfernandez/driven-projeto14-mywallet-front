import { APP_TXT_COLOR } from "../../constants/colors";
import { API_URI } from "../../constants/url";
import FormStyle from "../../assets/styles/FormStyle";
import HomeContainerStyle from "../../assets/styles/HomeContainerStyle";
import HomeContentStyle from "../../assets/styles/HomeContentStyle";
import LinkStyle from "../../assets/styles/LinkStyle";
import Logo from "../../components/Logo";
import TokenContext from "../../contexts/TokenContext";

import { ThreeDots } from "react-loader-spinner";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function HomePage() {
    const [token, setToken] = useContext(TokenContext);

    const [disabled, setDisabled] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function signIn(e) {
        e.preventDefault(); // prevent form redirect

        setDisabled(true);

        const body = {
            email,
            password
        };

        axios
            .post(`${API_URI}/sign-in`, body)
            .then(
                res => {
                    setToken(res.data.token);
                    localStorage.setItem("token", res.data.token);

                    navigate("/registros");
                }
            )
            .catch(
                err => {
                    alert(err.response.data.message || err.response.data);
                    setDisabled(false);
                }
            );
    };

    useEffect(() => {
        if (token) {
            navigate("/registros");
        }
    }, []);

    return (
        <HomeContainerStyle>
            <HomeContentStyle>
                <Logo />

                <FormStyle onSubmit={signIn}>
                    <input
                        disabled={disabled && true}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="E-mail"
                        required
                        type="email"
                    />

                    <input
                        disabled={disabled && true}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Senha"
                        required
                        type="password"
                    />

                    <button
                        disabled={disabled && true}
                    >
                        {disabled ?
                            <ThreeDots
                                ariaLabel="three-dots-loading"
                                color={APP_TXT_COLOR}
                            />
                        : "Entrar"}
                    </button>
                </FormStyle>

                <LinkStyle to="/cadastro">
                    Primeira vez? Cadastre-se!
                </LinkStyle>
            </HomeContentStyle>
        </HomeContainerStyle>
    );
}
