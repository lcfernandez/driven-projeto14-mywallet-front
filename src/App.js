import GlobalStyle from "./assets/styles/GlobalStyle";

import HomePage from "./pages/HomePage/HomePage";
import RecordEditPage from "./pages/RecordEditPage/RecordEditPage";
import RecordNewPage from "./pages/RecordNewPage/RecordNewPage";
import RecordsPage from "./pages/RecordsPage/RecordsPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cadastro" element={<SignUpPage />} />
                <Route path="/registros" element={<RecordsPage />} />
                <Route path="/registros/novo" element={<RecordNewPage />} />
                <Route path="/registros/:idRecord" element={<RecordEditPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
