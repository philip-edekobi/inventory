import NavBar from "./components/general/NavBar";
import HomePage from "./components/general/HomePage";
import Admin from "./components/admin/Admin";
import AdminView from "./components/admin/AdminView";
import UserView from "./components/user/UserView";
import User from "./components/user/User"

import{
    BrowserRouter as  Router,
    Routes,
    Route
} from 'react-router-dom';

export default function App(){
    return(
    <Router>
        <NavBar />
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="admin" element={<Admin />} />
                <Route path="admin/:username/:password" element={<AdminView />} />
                <Route path="/:name/:email/history" element={<UserView />} />
                <Route path="/:name/:email" element={<User />} />
            </Routes>
        </main>
    </Router>
    );
}