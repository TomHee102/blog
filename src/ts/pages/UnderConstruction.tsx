import "../../css/App.css"
import LabelledBox from "../components/LabelledBox.tsx";

export function UnderConstruction() {
    return (
        <>
            <div style={{display: 'grid', justifyContent: 'center', alignItems: 'center', margin: "auto", width: '30%'}}>
                <LabelledBox
                    header={{leftText: "tomhee.dev / under-construction", rightText: "v0.1"}}
                    footer={{rightText: "TPH-13022001"}}
                    bodyStyle={{textAlign: "left"}}>
                    Hello, this space is currently <span style={{color: 'yellow'}}>UNDER CONSTRUCTION</span>. There will be more soon...
                </LabelledBox>
            </div>
        </>
    )
}