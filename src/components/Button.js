import { APP_BASE_FONT } from "../constants/fonts";
import { APP_TXT_COLOR, BUTTON_BG_COLOR } from "../constants/colors";

import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Button({ type }) {
    return (
        <ButtonContainer to="/registros/novo">
            <ion-icon name={`${type === "income" ? "add" : "remove"}-circle-outline`} />
            
            <p>
                Nova
                <br />
                {type === "income" ? "entrada" : "saída"}
            </p>
        </ButtonContainer>
    );
}

const ButtonContainer = styled(Link)`
    background-color: ${BUTTON_BG_COLOR};
    border-radius: 5px;
    color: ${APP_TXT_COLOR};
    display: flex;
    flex-direction: column;
    font-family: ${APP_BASE_FONT};
    font-size: 17px;
    font-weight: 700;
    height: 114px;
    line-height: 20px;
    justify-content: space-between;
    padding: 10px;
    text-decoration: none;
    width: 50%;

    ion-icon {
        font-size: 26px;
    }

    p {
        margin-left: 3px;
    }
`;
