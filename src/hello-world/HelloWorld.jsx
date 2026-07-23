import './HelloWorld.css'

function HelloWorld(){
    const props = {
        text: "Hello World",
        age: 25,
        
    }
    return (
        <div>
            <HeaderHelloWorld {...props} />
            <ParagraphHelloWorld />
        </div>
    );
}

export default HelloWorld;

function HeaderHelloWorld(props){
    // const text = 'Hello World'
    return (
        <h1 className='title'>{props.text}</h1>
    );
}

function ParagraphHelloWorld(){
    const text = 'Welcome to ReactJS'
    const style = {
        color: "red",
        fontSize: "20px",
        backgroundColor: "yellow"
    }
    return (
        <p className='content'>{text.toLowerCase()}</p>
    )
}
