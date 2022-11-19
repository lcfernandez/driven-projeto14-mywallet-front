import FormStyle from "../../assets/styles/FormStyle";
import HomeContainerStyle from "../../assets/styles/HomeContainerStyle";
import HomeContentStyle from "../../assets/styles/HomeContentStyle";
import LinkStyle from "../../assets/styles/LinkStyle";
import Logo from "../../components/Logo";

export default function HomePage() {
    function signIn(e) {
        e.preventDefault(); // prevent form redirect
    };

    return (
        <HomeContainerStyle>
            <HomeContentStyle>
                <Logo />

                <FormStyle onSubmit={signIn}>
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

                    <button>Entrar</button>
                </FormStyle>

                <LinkStyle to={"/cadastro"}>
                    Primeira vez? Cadastre-se!
                </LinkStyle>
            </HomeContentStyle>
        </HomeContainerStyle>
    );
}
