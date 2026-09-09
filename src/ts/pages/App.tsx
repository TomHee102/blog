import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../../css/App.css"
import {UnderConstruction} from "./UnderConstruction.tsx";
import {Playground} from "./Playground.tsx";
import {Link} from "@mui/material";

export function App() {
    return (
        <>
            <div style={{color: "#9c9c83", display: "table-column", textAlign: "left", padding: "25px", width: '100%'}}>
                <div>
                    [ TOMHEE.DEV ]
                </div>

                <nav style={{paddingTop: "10px", fontSize: "14px", textTransform: "uppercase", alignContent: "center"}}>
                    <Link href="/under-construction">Under Construction</Link> {" "}
                    <Link href="/playground">Playground</Link>
                </nav>
            </div>

            <BrowserRouter>
                <Routes>
                    <Route path="/under-construction" element={<UnderConstruction />}/>
                    <Route path="/playground" element={<Playground />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}