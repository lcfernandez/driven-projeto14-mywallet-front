import FormStyle from "../../assets/styles/FormStyle";
import Header from "../../components/Header";

import styled from "styled-components";

export default function RecordEditPage() {
    function editRecord(e) {
        e.preventDefault(); // prevent form redirect
    }

    return (
        <RecordEditPageContainer onSubmit={editRecord}>
            <Header text="Editar entrada/saída" />

            <FormStyle>
                <input
                    min="0.01"
                    onWheel={e => e.target.blur()} // remove scroll
                    placeholder="Valor"
                    required
                    step="0.01"
                    type="number"
                />

                <input
                    placeholder="Descrição"
                    required
                    type="text"
                />

                <button>
                    Atualizar entrada/saída
                </button>
            </FormStyle>
        </RecordEditPageContainer>
    );
}

const RecordEditPageContainer = styled.div`
    padding: 0 25px;
`;
