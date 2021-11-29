import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Admin from "./components/Admin";
import AdminView from "./components/AdminView";
import UserView from "./components/UserView";
import User from "./components/User"

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
                <Route path="/:name/:email/purchase" element={<UserView />} />
                <Route path="/:name/:email" element={<User />} />
            </Routes>
        </main>
    </Router>
    );
}