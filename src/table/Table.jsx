import Row from "./Row";

export default function Table(){
    return(
        <table border="1">
            <tbody>
                <Row id="1" text="Data1"/>
                <Row id="2" text="Data2"/>
                <Row id="3" text="Data3"/>
            </tbody>
        </table>
    )
}