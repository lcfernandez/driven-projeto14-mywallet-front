import { API_URI } from "../../constants/url";
import FormStyle from "../../assets/styles/FormStyle";
import Header from "../../components/Header";
import TokenContext from "../../contexts/TokenContext";

import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

export default function RecordNewPage({ recordType }) {
    const [token] = useContext(TokenContext);

    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    function createRecord(e) {
        e.preventDefault(); // prevent form redirect

        const body = {
            amount,
            description,
            type: recordType
        }

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };

        axios
            .post(`${API_URI}/record`, body, config)
            .then(
                () => {
                    alert("Registro cadastrado com sucesso!");
                    navigate("/registros");
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

    useEffect(() => {
            if (!recordType) {
                navigate("/registros");
            }
        }
    , []);

    return (
        <RecordNewPageContainer onSubmit={createRecord}>
            <Header text={`Nova ${recordType === "expense" ? "saída" : "entrada"}`} />

            <FormStyle>
                <input
                    min="0.01"
                    onChange={e => setAmount(e.target.value)}
                    onWheel={e => e.target.blur()} // remove scroll
                    pattern="[0-9]"
                    placeholder="Valor"
                    required
                    step="0.01"
                    type="number"
                />

                <input
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Descrição"
                    required
                    type="text"
                />

                <button>
                    Salvar {recordType === "expense" ? "saída" : "entrada"}
                </button>
            </FormStyle>
        </RecordNewPageContainer>
    );
}

const RecordNewPageContainer = styled.div`
    padding: 0 25px;
`;
