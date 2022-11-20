import { APP_TXT_COLOR } from "../../constants/colors";
import { Link } from "react-router-dom";

import styled from "styled-components";

const LinkStyle = styled(Link)`
    color: ${APP_TXT_COLOR};
    cursor: pointer;
    font-weight: 700;
    margin: 30px 0;
    text-decoration: none;
`;

export default LinkStyle;
