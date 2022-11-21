import { API_URI } from "../../constants/url";

import FormStyle from "../../assets/styles/FormStyle";

import Header from "../../components/Header";

import TokenContext from "../../contexts/TokenContext";

import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

export default function RecordEditPage() {
    const [token] = useContext(TokenContext);

    const [amount, setAmount] = useState("");
    const [config, setConfig] = useState(undefined);
    const [description, setDescription] = useState("");
    const [type, setType] = useState(undefined);

    const { idRecord } = useParams();
    const navigate = useNavigate();

    function editRecord(e) {
        e.preventDefault(); // prevent form redirect

        const body = {
            amount: Number(amount),
            description
        }

        axios
            .put(`${API_URI}/record/${idRecord}`, body, config)
            .then(
                () => {
                    alert("Registro atualizado com sucesso!");
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
        if (!token) {
            navigate("/");
        }

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };

        axios
            .get(`${API_URI}/record/${idRecord}`, config)
            .then(
                res => {
                    setAmount(res.data.amount)
                    setConfig(config)
                    setDescription(res.data.description)
                    setType(res.data.type)
                }
            )
            .catch(
                err => {
                    console.error(
                        err.response.data.message || err.response.data
                    );
                }
            );


    }, []);

    return (
        <RecordEditPageContainer onSubmit={editRecord}>
            <Header text={`Editar ${type === "expense" ? "saída" : "entrada"}`} />

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
                    value={amount}
                />

                <input
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Descrição"
                    required
                    type="text"
                    value={description}
                />

                <button>
                    Atualizar {type === "expense" ? "saída" : "entrada"}
                </button>
            </FormStyle>
        </RecordEditPageContainer>
    );
}

const RecordEditPageContainer = styled.div`
    padding: 0 25px;
`;
