import { APP_TXT_COLOR } from "../../constants/colors";
import { API_URI } from "../../constants/url";
import FormStyle from "../../assets/styles/FormStyle";
import HomeContainerStyle from "../../assets/styles/HomeContainerStyle";
import HomeContentStyle from "../../assets/styles/HomeContentStyle";
import LinkStyle from "../../assets/styles/LinkStyle";
import Logo from "../../components/Logo";

import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function SignUpPage() {
    const [disabled, setDisabled] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const navigate = useNavigate();

    function signUp(e) {
        e.preventDefault(); // prevent form redirect

        if (password !== passwordConfirm) {
            alert("As senhas não são iguais. Tente novamente.");
        } else {
            setDisabled(true);

            const body = {
                name,
                email,
                password
            };

            axios
                .post(`${API_URI}/sign-up`, body)
                .then(() => navigate("/"))
                .catch(
                    err => {
                        alert(err.response.data.message || err.response.data);
                        setDisabled(false);
                    }
                );
        }
    };

    return (
        <HomeContainerStyle>
            <HomeContentStyle>
                <Logo />

                <FormStyle onSubmit={signUp}>
                    <input
                        disabled={disabled && true}
                        onChange={e => setName(e.target.value)}
                        placeholder="Nome"
                        required
                        type="text"
                    />

                    <input
                        disabled={disabled && true}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="E-mail"
                        required
                        type="email"
                    />

                    <input
                        disabled={disabled && true}
                        minLength="4"
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Senha"
                        required
                        type="password"
                    />

                    <input
                        disabled={disabled && true}
                        onChange={e => setPasswordConfirm(e.target.value)}
                        placeholder="Confirme a senha"
                        required
                        type="password"
                    />

                    <button disabled={disabled && true}>
                        {disabled ?
                            <ThreeDots
                                ariaLabel="three-dots-loading"
                                color={APP_TXT_COLOR}
                            />
                        : "Cadastrar"}
                    </button>
                </FormStyle>

                <LinkStyle to="/">
                    Já tem uma conta? Entre agora!
                </LinkStyle>
            </HomeContentStyle>
        </HomeContainerStyle>
    );
}
