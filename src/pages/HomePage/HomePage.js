import { APP_TEXT, BUTTON } from "../../constants/colors";
import { APP_BASE } from "../../constants/fonts";
import Logo from "../../components/Logo";

import styled from "styled-components";

export default function HomePage() {
    function signIn(e) {
        e.preventDefault(); // prevent form redirect
    };

    return (
        <HomePageContainer>
            <HomePageContent>
                <Logo />

                <Form onSubmit={signIn}>
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
                </Form>

                <Link>Primeira vez? Cadastre-se!</Link>
            </HomePageContent>
        </HomePageContainer>
    );
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: calc(100% - 30px);

    button {
        background-color: ${BUTTON};
        border: none;
        border-radius: 5px;
        color: ${APP_TEXT};
        cursor: pointer;
        height: 48px;
        font-family: inherit;
        font-size: 20px;
        font-weight: 700;
        margin: 6px;
    }
    
    input {
        border: none;
        border-radius: 5px;
        height: 58px;
        font-family: inherit;
        font-size: 20px;
        line-height: 23px;
        margin: 6px;
        padding: 0 15px;

        :focus {
            box-shadow: 0 0 0 0;
            outline: 0;
        }

        ::placeholder {
            font-size: 20px;
        }
    }
`

const HomePageContainer = styled.div`
    align-items: center;
    display: flex;
    font-family: ${APP_BASE};
    height: 100vh;
    width: 100vw;
`;

const HomePageContent = styled.div`
    align-items: center;    
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
`;

const Link = styled.div`
    color: ${APP_TEXT};
    cursor: pointer;
    font-weight: 700;
    margin: 30px 0;
`;
