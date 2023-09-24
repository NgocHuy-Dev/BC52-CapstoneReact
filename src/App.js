import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./modules/Home";
import Details from "./modules/Details";
import Signin from "./modules/Auth/pages/Signin";
import Signup from "./modules/Auth/pages/Signup";
import NotFound from "./components/NotFound";
import MainLayout from "./layouts/MainLayout";
import UserProvider from "./contexts/UserContext/UserContext";
import ProtectedRoute from "./components/Routers/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="movies/:movieId" element={<Details />} />
            {/* <Route
              path="tickets/:showtimeId"
              element={
                <ProtectedRoute>
                  <div>Ticket Pages</div>
                </ProtectedRoute>
              }
            /> */}

            <Route element={<ProtectedRoute />}>
              <Route
                path="tickets/:showtimeId"
                element={<div>Ticet Pages</div>}
              />
            </Route>
            {/* <Route path="tickets/:showtimeId" element={<Tickets />} /> */}

            <Route path="/sign-in" element={<Signin />} />
            <Route path="/sign-up" element={<Signup />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
