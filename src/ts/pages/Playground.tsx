import "../../css/App.css"
import LabelledBox from "../components/LabelledBox.tsx";

export function Playground() {
    return (
        <>
            <div style={{display: 'grid', width: '100%'}}>
                <LabelledBox
                    header={{leftText: "tomhee.dev / playground", rightText: "v0.1"}}
                    footer={{rightText: "TPH-13022001"}}
                    bodyStyle={{textAlign: "left"}}>
                    <h2>Lorem Ipsum</h2>
                    <LabelledBox header={{leftText: "tomhee.dev / playground", rightText: "v0.2"}}
                                       footer={{rightText: "TPH-13022001"}}
                                       bodyStyle={{textAlign: "left"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce aliquet nibh sed erat convallis, tincidunt tincidunt nisl viverra.
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                        Vestibulum quis tellus nec massa faucibus mollis. Sed laoreet enim ut facilisis lobortis.
                        Phasellus eget tortor quis diam feugiat tincidunt ut nec mauris. Donec nec augue enim.
                        Nunc sit amet malesuada velit. Vestibulum id bibendum neque. Fusce eu mattis dui.
                    </LabelledBox>
                </LabelledBox>
                <LabelledBox header={{leftText: "tomhee.dev / playground", rightText: "v0.3"}}
                             footer={{rightText: "TPH-13022001"}}
                             bodyStyle={{textAlign: "left"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce aliquet nibh sed erat convallis, tincidunt tincidunt nisl viverra.
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                    Vestibulum quis tellus nec massa faucibus mollis. Sed laoreet enim ut facilisis lobortis.
                    Phasellus eget tortor quis diam feugiat tincidunt ut nec mauris. Donec nec augue enim.
                    Nunc sit amet malesuada velit. Vestibulum id bibendum neque. Fusce eu mattis dui.
                </LabelledBox>
            </div>
        </>
    )
}