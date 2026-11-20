import './HelloWorld.css';

export default function HelloWorld() {
    const props = {
        text: "Hello World from spread syntax"
    }
    return (
        <div>
            <HeaderHelloWorld {...props}/>
            <ParagraphHelloWorld/>
        </div>
    )
}

function HeaderHelloWorld({text = "Ups, lupa kasih teks"}) {
    // const text = "Hello World";
    return (
        <h1 className='title'>{text.toUpperCase()}</h1> //kode JS di dalam kurung kurawal
    )
}

function ParagraphHelloWorld() {
    const text = "Selamat Belejar ReactJs";
    return (
        <p className='content'>{text.toLowerCase()}</p>//baik style yang di header atau di paragraph sama
    )
}