import { APP_TEXT_COLOR } from "../constants/colors";
import { LOGO_FONT } from "../constants/fonts";

import styled from "styled-components";

export default function Logo() {
    return (
        <LogoContainer>
            MyWallet
        </LogoContainer>
    );
}

const LogoContainer = styled.div`
    color: ${APP_TEXT_COLOR};
    font-family: ${LOGO_FONT};
    font-size: 32px;
    line-height: 50px;
    margin: 18px 0;
`;
