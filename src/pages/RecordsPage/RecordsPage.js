import { APP_BASE_FONT } from "../../constants/fonts";
import {
    DATE_COLOR,
    EXPENSE_COLOR,
    INCOME_COLOR,
    LIST_BG_COLOR,
    LIST_TXT_EMPTY_COLOR,
    REMOVE_COLOR
} from "../../constants/colors";
import Button from "../../components/Button";
import Header from "../../components/Header";

import styled from "styled-components";

export default function RecordsPage() {
    return (
        <RecordsPageContainer>
            <Header icon text="Olá, Fulano" />

            <RecordsList empty={false}>
                <ul>
                    <li>
                        <div>
                            <span>30/11</span> Almoço mãe
                        </div>

                        <div>
                            <span><Amount type="expense">39,90</Amount></span> <ion-icon name="close-outline"></ion-icon>
                        </div>
                    </li>
                    
                    <li>
                        <div>
                            <span>27/11</span> Mercado
                        </div>

                        <div>
                            <span><Amount type="expense">542,54</Amount></span> <ion-icon name="close-outline"></ion-icon>
                        </div>
                    </li>
                    
                    <li>
                        <div>
                            <span>26/11</span> Compras churrasco
                        </div>

                        <div>
                            <span><Amount type="expense">67,60</Amount></span> <ion-icon name="close-outline"></ion-icon>
                        </div>
                    </li>
                    
                    <li>
                        <div>
                            <span>20/11</span> Empréstimo Maria
                        </div>

                        <div>
                            <span><Amount type="income">500,00</Amount></span> <ion-icon name="close-outline"></ion-icon>
                        </div>
                    </li>
                    
                    <li>
                        <div>
                            <span>15/11</span> Salário
                        </div>

                        <div>
                            <span><Amount type="income">3000,00</Amount></span> <ion-icon name="close-outline"></ion-icon>
                        </div>
                    </li>

                    <li>
                        <div>
                            <span>30/11</span> Almoço mãe
                        </div>

                        <div>
                            <span><Amount type="expense">39,90</Amount></span> <ion-icon name="close-outline"></ion-icon>
                        </div>
                    </li>
                    
                    <li>
                        <div>
                            <span>27/11</span> Mercado
                        </div>

                        <div>
                            <span><Amount type="expense">542,54</Amount></span> <ion-icon name="close-outline"></ion-icon>
                        </div>
                    </li>
                    
                    <li>
                        <div>
                            <span>26/11</span> Compras churrasco
                        </div>

                        <div>
                            <span><Amount type="expense">67,60</Amount></span> <ion-icon name="close-outline"></ion-icon>
                        </div>
                    </li>
                    
                    <li>
                        <div>
                            <span>20/11</span> Empréstimo Maria
                        </div>

                        <div>
                            <span><Amount type="income">500,00</Amount></span> <ion-icon name="close-outline"></ion-icon>
                        </div>
                    </li>
                    
                    <li>
                        <div>
                            <span>15/11</span> Salário
                        </div>

                        <div>
                            <span><Amount type="income">3000,00</Amount></span> <ion-icon name="close-outline"></ion-icon>
                        </div>
                    </li>

                    <li>
                        <div>
                            <span>30/11</span> Almoço mãe
                        </div>

                        <div>
                            <span><Amount type="expense">39,90</Amount></span> <ion-icon name="close-outline"></ion-icon>
                        </div>
                    </li>
                    
                    <li>
                        <div>
                            <span>27/11</span> Mercado
                        </div>

                        <div>
                            <span><Amount type="expense">542,54</Amount></span> <ion-icon name="close-outline"></ion-icon>
                        </div>
                    </li>
                    
                    <li>
                        <div>
                            <span>26/11</span> Compras churrasco
                        </div>

                        <div>
                            <span><Amount type="expense">67,60</Amount></span> <ion-icon name="close-outline"></ion-icon>
                        </div>
                    </li>
                    
                    <li>
                        <div>
                            <span>20/11</span> Empréstimo Maria
                        </div>

                        <div>
                            <span><Amount type="income">500,00</Amount></span> <ion-icon name="close-outline"></ion-icon>
                        </div>
                    </li>
                    
                    <li>
                        <div>
                            <span>15/11</span> Salário
                        </div>

                        <div>
                            <span><Amount type="income">3000,00</Amount></span> <ion-icon name="close-outline"></ion-icon>
                        </div>
                    </li>
                </ul>

                <Balance>
                    <div>SALDO</div>
                    <div>2849,96</div>
                </Balance>
                {/* Não há registros de
                <br />
                entrada ou saída */}
            </RecordsList>

            <Buttons>
                <Button type="income" />
                
                <Button type="expense" />
            </Buttons>
        </RecordsPageContainer>
    );
}

const Amount = styled.div`
    color: ${({type}) => type === "expense" ? EXPENSE_COLOR : INCOME_COLOR};
`;

const Balance = styled.div`
    display: flex;
    font-size: 17px;
    justify-content: space-between;
    padding: 0 11px 10px 15px;
    width: 100%;

    div:nth-child(1) {
        font-weight: 700;
    }

    div:nth-child(2) {
        color: ${INCOME_COLOR};
    }
`;

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 15px 0;

    a:nth-child(1) {
        margin-right: 7.5px;
    }

    a:nth-child(2) {
        margin-left: 7.5px;
    }
`;

const RecordsList = styled.div`
    align-items: center;
    background-color: ${LIST_BG_COLOR};
    border-radius: 5px;
    color: ${({empty}) => empty ? LIST_TXT_EMPTY_COLOR : "default"};
    display: flex;
    flex-direction: column;
    font-family: ${APP_BASE_FONT};
    font-size: 20px;
    height: calc(100vh - 226px);
    justify-content: ${({empty}) => empty ? "center" : "space-between"};
    line-height: 23px;
    text-align: center;

    ul {
        font-size: 16px;
        line-height: 36px;
        overflow: scroll;
        padding: 23px 6px 23px 10px;
        width: 100%;

        li {
            display: flex;
            justify-content: space-between;

            div:nth-child(2) {
                align-items: center;
                display: flex;
            }

            ion-icon {
                color: ${REMOVE_COLOR};
                margin-left: 5px;
            }

            span {
                color: ${DATE_COLOR};
                margin-right: 4px;
            }
        }
    }
`;

const RecordsPageContainer = styled.div`
    padding: 0 25px;
`;
