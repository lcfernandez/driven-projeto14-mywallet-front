import { APP_TEXT_COLOR, BUTTON_COLOR } from "../../constants/colors";

import styled from "styled-components";

const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    width: calc(100% - 30px);

    button {
        background-color: ${BUTTON_COLOR};
        border: none;
        border-radius: 5px;
        color: ${APP_TEXT_COLOR};
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
`;

export default FormStyle;
