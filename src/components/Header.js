import { APP_TXT_COLOR } from "../constants/colors";
import { APP_BASE_FONT } from "../constants/fonts";

import styled from "styled-components";

export default function Header({ icon, text }) {
    return (
        <HeaderContainer>
            {text}

            {icon &&
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="28"
                    height="28"
                >
                    <path
                        fill="none"
                        d="M0 0h24v24H0z"
                    />
                    <path
                        d="M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3h-2V4H6v16h12v-2h2v3a1 1 0 0 1-1 1H5zm13-6v-3h-7v-2h7V8l5 4-5 4z"
                        fill="rgba(255,255,255,1)"
                    />
                </svg>
            }
        </HeaderContainer>
    );
}

const HeaderContainer = styled.div`
    color: ${APP_TXT_COLOR};
    display: flex;
    font-family: ${APP_BASE_FONT};
    font-size: 26px;
    font-weight: 700;
    justify-content: space-between;
    padding: 25px 0;
`;
