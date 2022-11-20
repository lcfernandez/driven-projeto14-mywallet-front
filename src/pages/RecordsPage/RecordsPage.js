import Button from "../../components/Button";
import Header from "../../components/Header";
import { LIST_BG_COLOR, LIST_TXT_EMPTY_COLOR } from "../../constants/colors";
import { APP_BASE_FONT } from "../../constants/fonts";

import styled from "styled-components";

export default function RecordsPage() {
    return (
        <RecordsPageContainer>
            <Header icon text="Olá, Fulano" />

            <ul>
                Não há registros de
                <br />
                entrada ou saída
            </ul>

            <Buttons>
                <Button type="income" />
                
                <Button type="expense" />
            </Buttons>
        </RecordsPageContainer>
    );
}

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 15px 0;

    a:nth-child(1) {
        margin-right: 7.5px;
    }

    a:nth-child(2) {
        margin-left: 7.5px;
    }
`;

const RecordsPageContainer = styled.div`
    padding: 0 25px;

    ul {
        align-items: center;
        background-color: ${LIST_BG_COLOR};
        border-radius: 5px;
        color: ${LIST_TXT_EMPTY_COLOR};
        display: flex;
        font-family: ${APP_BASE_FONT};
        font-size: 20px;
        height: calc(100vh - 226px);
        justify-content: center;
        line-height: 23px;
        text-align: center;
    }
`;
