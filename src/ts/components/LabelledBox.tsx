import "../../css/LabelledBox.css"
import Box from "@mui/material/Box"
import { type ReactNode} from "react";

interface Label {
    leftText?: string;
    rightText?: string;
}

interface LabelledBoxProps {
    header: Label
    footer?: Label
    bodyStyle?: React.CSSProperties;
    children?: ReactNode
}

export default function LabelledBox(props: LabelledBoxProps) {
    return(
        <Box sx={{
            p: 2,
            border: '1px dashed',
            borderColor: 'dimgrey',}}>
            <div className="label-header">
                <div className="label-left">{props.header.leftText}</div>
                <div className="label-right">{props.header.rightText}</div>
            </div>
            <div className="body" style={props.bodyStyle}>
                {props.children}
            </div>
            <div className="label-footer">
                <div className="label-left">{props.footer?.leftText}</div>
                <div className="label-right">{props.footer?.rightText}</div>
            </div>
        </Box>
    )
}