import { APP_BASE_FONT } from "../../constants/fonts";
import { APP_TXT_COLOR, BUTTON_BG_COLOR } from "../../constants/colors";

import styled from "styled-components";

const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;

    button {
        align-items: center;
        background-color: ${BUTTON_BG_COLOR};
        border: none;
        border-radius: 5px;
        color: ${APP_TXT_COLOR};
        cursor: pointer;
        display: flex;
        height: 48px;
        font-family: ${APP_BASE_FONT};
        font-size: 20px;
        font-weight: 700;
        justify-content: center;
        margin: 6px 0;
    }

    input {
        border: none;
        border-radius: 5px;
        height: 58px;
        font-family: ${APP_BASE_FONT};
        font-size: 20px;
        line-height: 23px;
        margin: 6px 0;
        padding: 0 15px;

        :focus {
            box-shadow: 0 0 0 0;
            outline: 0;
        }

        ::placeholder {
            font-size: 20px;
        }

        /* remove arrows/spinners from number input */
        /* Chrome, Safari, Edge, Opera */
        ::-webkit-outer-spin-button,
        ::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        /* Firefox */
        &[type=number] {
            -moz-appearance: textfield;
        }
    }
`;

export default FormStyle;
