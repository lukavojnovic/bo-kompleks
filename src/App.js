import Navbar from './components/Navbar';
import About from './components/About';
import Location from './components/Location'
import Home from './components/Home';
import AboutProject from './components/AboutProject';
import Buildings from './components/Buildings';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {QueryClient, QueryClientProvider} from "react-query";
import Admin from "./Admin";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import ZgradaNew from "./components/admin/ZgradaNew";
import AdminZgrade from './components/admin/AdminZgrade';
import StanNew from './components/admin/StanNew';
import AdminPoruke from './components/admin/AdminPoruke';

export const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <Router>
            <Switch>
                <Route path="/login" exact={true}>
                    <Login/>
                </Route>
                <ProtectedRoute path="/admin" exact={true}>
                    <Admin/>
                </ProtectedRoute>
                <ProtectedRoute path="/admin/zgrade" exact={true}>
                    <AdminZgrade/>
                </ProtectedRoute>
                <ProtectedRoute path="/admin/poruke" exact={true}>
                    <AdminPoruke/>
                </ProtectedRoute>
                <ProtectedRoute path="/admin/zgrade/new" exact={true}>
                    <ZgradaNew/>
                </ProtectedRoute>
                <ProtectedRoute path="/admin/stanovi/new" exact={true}>
                    <StanNew/>
                </ProtectedRoute>
                <Route path="/">
                    <Navbar/>
                    <Home/>
                    <About/>
                    <AboutProject/>
                    <Location/>
                    <Buildings/>
                    <Contact/>
                    <Footer/>
                </Route>
            </Switch>
        </Router>
    </QueryClientProvider>
);

export default App;
