import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserProvider";

import { Sidebar } from "./components/Layout/Sidebar";
import { Booking } from "./pages/Booking";
import { Profile } from "./pages/Profile";
import { Dashboard } from "./pages/Dashboard";
import { ResourceDetail } from "./pages/ResourceDetail";
import { ErrorBoundary } from "./components/ErrorBoundary";

export default function App(){
  return(
    <ErrorBoundary>
      <UserProvider>
        <Router>
          <div>
            <Sidebar />
            <main>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/Resource/ :id" element={<ResourceDetail />} />
              </Routes>
            </main>
          </div>
        </Router>
      </UserProvider>
    </ErrorBoundary>
  );
}