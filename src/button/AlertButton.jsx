export default function AlertButton({text, message}){
    function handleClick(e){
        console.log("Event: ", e)
        alert(message)
    }

    return (
        <button onClick={handleClick}>
            {text}
        </button>
    )
}