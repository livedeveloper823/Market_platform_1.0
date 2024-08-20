import App from "../pages/app"
import Market from "../pages/market";
import Profile from "../pages/profile"
import AuthGuard from "../contexts/AuthGurad";
import Setting from "../pages/setting"
import Activity from "../pages/activity"
import Leaderboard from "../pages/ranks"
import EventInfo from '../pages/eventInfo'
import Election from "../pages/election";
import WatchList from "../pages/watchlist";

const MainRoutes = {
    path: "/",
    children: [
        {
            path: "/",
            element: <App />
        },
        {
            path: "/markets",
            element: <Market />
        },
        {
            path: "/profile",
            element: (
                <AuthGuard>
                    <Profile />
                </AuthGuard>
            )
        },
        {
            path: "/setting",
            element: <Setting />
        },
        {
            path: "/leaderboard",
            element: <Leaderboard />
        },
        {
            path: "/activity",
            element: <Activity />
        },
        {
            path: "/event",
            element: <EventInfo />
        },
        {
            path: "/elections",
            element: <Election />
        },
        {
            path: "/watchList",
            element: <WatchList />
        },

    ]
}

export default MainRoutes;