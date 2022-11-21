import { DATE_COLOR, EXPENSE_COLOR, INCOME_COLOR, REMOVE_COLOR } from "../constants/colors";

import styled from "styled-components";

export default function Record({amount, date, description, type}) {
    return (
        <RecordContainer type={type}>
            <div>
                <span>{date.slice(0,5)}</span> {description}
            </div>

            <div>
                <span>{Number(amount).toFixed(2).toString().replace(".", ",")}</span> <ion-icon name="close-outline"></ion-icon>
            </div>
        </RecordContainer>
    );
}

const RecordContainer = styled.li`
    display: flex;
    justify-content: space-between;

    div:nth-child(2) {
        align-items: center;
        display: flex;

        span {
            color: ${({type}) => type === "expense" ? EXPENSE_COLOR : INCOME_COLOR};
        }
    }

    ion-icon {
        color: ${REMOVE_COLOR};
        margin-left: 5px;
    }

    span {
        color: ${DATE_COLOR};
        margin-right: 4px;
    }
`;
