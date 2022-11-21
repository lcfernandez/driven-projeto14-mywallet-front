import { APP_BASE_FONT } from "../../constants/fonts";
import { API_URI } from "../../constants/url";
import {
    EXPENSE_COLOR,
    INCOME_COLOR,
    LIST_BG_COLOR,
    LIST_TXT_EMPTY_COLOR
} from "../../constants/colors";

import Button from "../../components/Button";
import Header from "../../components/Header";
import Record from "../../components/Record";

import TokenContext from "../../contexts/TokenContext";

import { ThreeDots } from "react-loader-spinner";
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

export default function RecordsPage({ setRecordType }) {
    const [token] = useContext(TokenContext);

    const [balance, setBalance] = useState(0);
    const [name, setName] = useState("");
    const [records, setRecords] = useState(undefined);

    const navigate = useNavigate();

    function handleRecords() {
        if (!records) {
            return <ThreeDots ariaLabel="three-dots-loading" color={LIST_TXT_EMPTY_COLOR} />;
        } else if (records.length === 0) {
            return <p>Não há registros de <br /> entrada ou saída</p>;
        } else {
            return (
                <>
                    <ul>
                        {records.map(
                            record =>
                                <Record
                                    amount={record.amount}
                                    date={record.date}
                                    description={record.description}
                                    key={record._id}
                                    type={record.type}
                                />
                        )}
                    </ul>

                    <Balance balance={balance}>
                        <div>SALDO</div>
                        <div>{Math.abs(balance).toString().replace(".", ",")}</div>
                    </Balance>
                </>
            );
        }
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
            .get(`${API_URI}/record`, config)
            .then(
                res => {
                    setBalance(Number(res.data.balance).toFixed(2));
                    setName(res.data.user);
                    setRecords(res.data.records);
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
        <RecordsPageContainer>
            <Header icon text={`Olá, ${name}`} />

            <RecordsList records={records && records.length}>
                {handleRecords()}
            </RecordsList>

            <Buttons>
                <Button setRecordType={setRecordType} type="income" />
                
                <Button setRecordType={setRecordType} type="expense" />
            </Buttons>
        </RecordsPageContainer>
    );
}

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
        color: ${({balance}) => balance < 0 ? EXPENSE_COLOR : INCOME_COLOR};
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
    display: flex;
    flex-direction: column;
    font-family: ${APP_BASE_FONT};
    font-size: 20px;
    height: calc(100vh - 226px);
    justify-content: ${({records}) => records ? "space-between" : "center"};
    line-height: 23px;
    text-align: center;

    p {
        color: ${LIST_TXT_EMPTY_COLOR};
    }

    ul {
        font-size: 16px;
        line-height: 36px;
        overflow: scroll;
        padding: 23px 6px 23px 10px;
        width: 100%;
    }
`;

const RecordsPageContainer = styled.div`
    padding: 0 25px;
`;
