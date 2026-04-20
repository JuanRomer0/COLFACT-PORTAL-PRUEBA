import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "@/pages/LoginPage";
import DashboardPage from "@/pages/DashboardPage";
import PrivateRoute from "./PrivateRoute";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};