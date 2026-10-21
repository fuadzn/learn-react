import { useRef, useState } from "react"
import GuestbookForm from "./GuestbookForm"

export default function Guestbook() {
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")

    const nameInput = useRef(null)

    function handleSubmit(e) {
        e.preventDefault()
        setName("")
        setMessage("")

        nameInput.current.focus()

        alert(`Hello ${name}! Your message: "${message}" has been submitted. `)
    }

    return (
        <>
            <h1>Guest Book</h1>
            <div>
                <form>
                    <GuestbookForm ref={nameInput} name={name} setName={setName} />

                    <label htmlFor="message">Message</label><br />
                    <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} />

                    <br /><br />
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </>
    )
}