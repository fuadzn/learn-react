import { useImmer } from "use-immer"

const initialData = {
    name: "",
    message: ""
}

export default function ContactForm() {
    // const [contact, setContact] = useState({
    //     name: "",
    //     message: ""
    // })

    // function handleChangeName(e) {
    //     setContact({ ...contact, name: e.target.value })
    // }

    // function handleChangeMessage(e) {
    //     setContact({ ...contact, message: e.target.value })
    // }

    const [contact, setContact] = useImmer(initialData)

    function handleChangeName(e) {
        setContact(contact => {
            contact.name = e.target.value
        })
    }

    function handleChangeMessage(e) {
        setContact(contact => {
            contact.message = e.target.value
        })
    }

    return (
        <div>
            <h1>Contact Form</h1>
            <form>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" value={contact.name} onChange={handleChangeName} />
                <br />
                <br />
                <label htmlFor="message">Message: </label>
                <input type="text" name="message" id="message" value={contact.message} onChange={handleChangeMessage} />
            </form>
            <h1>Contact Detail</h1>
            <p>Name: {contact.name}</p>
            <p>Message: {contact.message}</p>
        </div>
    )
}