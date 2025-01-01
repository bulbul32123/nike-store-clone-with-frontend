import { Link, useParams } from "react-router-dom"
import ProfilePage from "../profile/ProfilePage"
import SettingPage from "../setting/SettingPage"
import InboxPage from "../inbox/InboxPage"
import FavoritePage from "../favorite/FavoritePage"

export default function AccountPage() {
    const { tab } = useParams()
    return (
        <div>
            <Link to={`/account/profile`}>Profile</Link>
            <Link to={`/account/inbox`}>Inbox</Link>
            <Link to={`/account/favorites`}>Favorites</Link>
            <Link to={`/account/setting`}>Setting</Link>


            {tab === "profile" && <ProfilePage />}
            {tab === "inbox" && <InboxPage />}
            {tab === "favorites" && <FavoritePage />}
            {tab === "setting" && <SettingPage />}
        </div>
    )
}
