export default function HelloWorld() {
    return (
        <div>
            <HeaderHelloWorld/>
            <ParagraphHelloWorld/>
        </div>
    )
}

function HeaderHelloWorld() {
    const text = "Hello World";
    return (
        <h1 style={{ 
            color : "red",
            backgroundColor : "aqua"
         }}>{text.toUpperCase()}</h1> //kode JS di dalam kurung kurawal
    )
}

function ParagraphHelloWorld() {
    const text = "Selamat Belejar ReactJs";
    const style = {
        color: "blue",
        backgroundColor: "red"
    }
    return (
        <p style={style}>{text.toLowerCase()}</p>//baik style yang di header atau di paragraph sama
    )
}