import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../../css/App.css"
import {UnderConstruction} from "./UnderConstruction.tsx";
import {Playground} from "./Playground.tsx";
import {Link} from "@mui/material";

export function App() {
    return (
        <>
            <div style={{color: "#9c9c83", display: "table-column", textAlign: "left", padding: "25px", width: '100%'}}>
                <h2>
                    THOMAS HEENAN
                </h2>

                <nav style={{paddingTop: "10px", fontSize: "14px", alignContent: "center"}}>
                    <Link href="/">Home</Link> {" "}
                    <Link href="/test">Test</Link>
                </nav>
            </div>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<UnderConstruction />}/>
                    <Route path="/test" element={<Playground />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}