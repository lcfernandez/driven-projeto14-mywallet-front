import { APP_TEXT } from "../constants/colors";
import { LOGO } from "../constants/fonts";

import styled from "styled-components";

export default function Logo() {
    return (
        <LogoContainer>
            MyWallet
        </LogoContainer>
    );
}

const LogoContainer = styled.div`
    color: ${APP_TEXT};
    font-family: ${LOGO};
    font-size: 32px;
    line-height: 50px;
    margin: 18px 0;
`;
