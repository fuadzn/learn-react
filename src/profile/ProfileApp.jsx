import { ProfileContext } from "./ProfileContext"
import Profile from "./Profile"
import ProfileAddress from "./ProfileAddress"

export default function ProfileApp() {
    return (
        <ProfileContext.Provider value="Fuad">
            <h1>Profile App</h1>
            <Profile />
            <ProfileAddress />
        </ProfileContext.Provider>
    )
}