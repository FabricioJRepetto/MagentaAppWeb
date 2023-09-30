import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Home from './components/views/home/Home';
import PrivateRoutes from './components/common/PrivateRoutes';
import LoginScreen from './components/views/login/LoginScreen';
import Calendar from './components/views/user/calendar/Calendar';
import Profile from './components/views/user/profile/Profile';
import Charts from './components/views/user/charts/Charts';
import LandingPage from './components/views/landingpage/LandingPage';
import NotFound from './components/common/NotFound';
import './App.css'

function App() {
    return (
        <Routes>
            <Route path='/' element={<NavBar />}>
                <Route path='/' element={<LandingPage />} />
                <Route path="/login" element={<LoginScreen />} />

                <Route path="/app" element={<PrivateRoutes />}>
                    <Route index element={<Home />} />

                    <Route path="user" element={<Profile />} />
                    <Route path='calendar' element={<Calendar />} />
                    <Route path='charts' element={<Charts />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default App
