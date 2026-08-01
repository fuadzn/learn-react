export default function SearchForm(){
    return (
        <form>
            <input type="text" />
            <button onClick={(e) => {
                e.preventDefault()
                alert('Form Search')
            }}>Search</button>
        </form>
    )
}