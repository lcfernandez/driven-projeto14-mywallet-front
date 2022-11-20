import { APP_TXT_COLOR, BUTTON_BG_COLOR } from "../constants/colors";
import styled from "styled-components";
import { APP_BASE_FONT } from "../constants/fonts";

export default function Button({ type }) {
    return (
        <ButtonContainer>
            <ion-icon name={`${type === "income" ? "add" : "remove"}-circle-outline`} />
            
            Nova <br /> {type === "income" ? "entrada" : "saída"}
        </ButtonContainer>
    );
}

const ButtonContainer = styled.button`
    align-items: flex-start;
    background-color: ${BUTTON_BG_COLOR};
    border: none;
    border-radius: 5px;
    color: ${APP_TXT_COLOR};
    cursor: pointer;
    display: flex;
    flex-direction: column;
    font-family: ${APP_BASE_FONT};
    font-size: 17px;
    font-weight: 700;
    height: 114px;
    line-height: 20px;
    justify-content: space-between;
    padding: 10px;
    text-align: left;
    width: 50%;

    ion-icon {
        font-size: 25px;
    }
`;
