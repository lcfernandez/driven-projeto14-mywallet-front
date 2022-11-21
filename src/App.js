import GlobalStyle from "./assets/styles/GlobalStyle";

import TokenContext from "./contexts/TokenContext";

import HomePage from "./pages/HomePage/HomePage";
import RecordEditPage from "./pages/RecordEditPage/RecordEditPage";
import RecordNewPage from "./pages/RecordNewPage/RecordNewPage";
import RecordsPage from "./pages/RecordsPage/RecordsPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
    const [recordType, setRecordType] = useState(undefined);
    const [token, setToken] = useState(
        localStorage.getItem("token") || undefined
    );

    return (
        <BrowserRouter>
            <GlobalStyle />
            
            <TokenContext.Provider value={[token, setToken]}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/cadastro" element={<SignUpPage />} />
                    <Route path="/registros" element={<RecordsPage setRecordType={setRecordType} />} />
                    <Route path="/registros/novo" element={<RecordNewPage recordType={recordType} />} />
                    <Route path="/registros/:idRecord" element={<RecordEditPage />} />
                </Routes>
            </TokenContext.Provider>
        </BrowserRouter>
    );
}

export default App;
