export default function SayHelloForm(){
    function handleClick(e){
        e.preventDefault()
        const name = document.getElementById('input_name').value
        document.getElementById('say_hello').innerText = 'Hello ' + name
    }
    
    return (
        <div>
            <form>
                <input type="text" id="input_name" />
                <button onClick={handleClick}>Say Hello</button>
                <h1 id="say_hello">Hello World</h1>
            </form>
        </div>
    )
}