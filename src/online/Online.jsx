import { useOnline } from "./OnlineHook";

export default function Online() {
    const isOnline = useOnline()

    return (
        <h1>
            {isOnline ? "You are online" : "You are offline"}
        </h1>
    )
}