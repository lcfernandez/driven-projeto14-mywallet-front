import FormStyle from "../../assets/styles/FormStyle";
import HomeContainerStyle from "../../assets/styles/HomeContainerStyle";
import HomeContentStyle from "../../assets/styles/HomeContentStyle";
import LinkStyle from "../../assets/styles/LinkStyle";
import Logo from "../../components/Logo";

export default function SignUpPage() {
    function signUp(e) {
        e.preventDefault(); // prevent form redirect
    };

    return (
        <HomeContainerStyle>
            <HomeContentStyle>
                <Logo />

                <FormStyle onSubmit={signUp}>
                    <input 
                        placeholder="Nome"
                        required
                        type="text"
                    />

                    <input 
                        placeholder="E-mail"
                        required
                        type="email"
                    />

                    <input
                        placeholder="Senha"
                        required
                        type="password"
                    />

                    <input
                        placeholder="Confirme a senha"
                        required
                        type="password"
                    />

                    <button>Cadastrar</button>
                </FormStyle>

                <LinkStyle to={"/"}>
                    Já tem uma conta? Entre agora!
                </LinkStyle>
            </HomeContentStyle>
        </HomeContainerStyle>
    );
}
