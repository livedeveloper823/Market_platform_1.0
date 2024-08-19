import AddEvent from "../pages/admin/addEvent";
import Admin from "../pages/admin/admin";
import Setting from "../pages/setting";

const AdminRoute = {
    path: "/",
    children: [
        {
            path: "/admin",
            element: <Admin />
        },
        {
            path: "/admin/addevent",
            element: <AddEvent />
        },
        {
            path: "/admin/setting",
            element: <Setting />
        }
    ]
}

export default AdminRoute;