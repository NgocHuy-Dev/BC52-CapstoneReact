import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./modules/Home";
import Details from "./modules/Details";
import Signin from "./modules/Auth/pages/Signin";
import Signup from "./modules/Auth/pages/Signup";
import NotFound from "./components/NotFound";
import MainLayout from "./layouts/MainLayout";
import UserProvider from "./contexts/UserContext/UserContext";
import ProtedtedRoute from "./routers/ProtectedRoute/ProtedtedRoute";
import AdminMovie from "./modules/AdminMovie";
import TicketPage from "./modules/TicketPage";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="movies/:movieId" element={<Details />} />

            <Route element={<ProtedtedRoute />}>
              <Route path="tickets/:showtimeId" element={<TicketPage />} />
            </Route>

            <Route path="/sign-in" element={<Signin />} />
            <Route path="/sign-up" element={<Signup />} />
          </Route>

          {/* Admin */}
          {/* <Route element={<AdminProtectedRoute />}> */}
          <Route path="/admin">
            <Route path="movies" element={<AdminMovie />} />
            {/* <Route path="users" element={<AdminUser />} />
            <Route path="tickets" element={<AdminTicket />} /> */}
          </Route>
          {/* </Route> */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
