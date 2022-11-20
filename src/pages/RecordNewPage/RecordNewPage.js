import FormStyle from "../../assets/styles/FormStyle";
import Header from "../../components/Header";

import styled from "styled-components";

export default function RecordNewPage() {
    function createRecord(e) {
        e.preventDefault(); // prevent form redirect
    }

    return (
        <RecordNewPageContainer onSubmit={createRecord}>
            <Header text="Nova entrada/saída" />

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
                    Salvar entrada/saída
                </button>
            </FormStyle>
        </RecordNewPageContainer>
    );
}

const RecordNewPageContainer = styled.div`
    padding: 0 25px;
`;
