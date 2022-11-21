import { API_URI } from "../constants/url";
import { DATE_COLOR, EXPENSE_COLOR, INCOME_COLOR, REMOVE_COLOR } from "../constants/colors";

import TokenContext from "../contexts/TokenContext";

import { useContext } from "react";
import axios from "axios";
import styled from "styled-components";

export default function Record({amount, date, description, id, type, setUpdate, update}) {
    const [token] = useContext(TokenContext);

    function deleteRecord() {
        if (window.confirm(`Deseja mesmo apagar o registro "${description}"?`)) {
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            };

            axios
                .delete(`${API_URI}/record/${id}`, config)
                .then(
                    () => {
                        alert("Registro apagado com sucesso!")
                        setUpdate(!update);
                    }
                )
                .catch(
                    err => {
                        console.error(
                            err.response.data.message || err.response.data
                        );
                    }
                )
        }
    }

    return (
        <RecordContainer type={type}>
            <div>
                <span>{date.slice(0,5)}</span> {description}
            </div>

            <div>
                <span>{Number(amount).toFixed(2).toString().replace(".", ",")}</span>
                
                <ion-icon name="close-outline" onClick={deleteRecord} />
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
        cursor: pointer;
        margin-left: 5px;
    }

    span {
        color: ${DATE_COLOR};
        margin-right: 4px;
    }
`;
