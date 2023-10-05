import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import AppLayout from "./ui/AppLayout";
import ProtectedRoute from "./ui/ProtectedRoute";
import ListBagasi from "./pages/bagasi/ListBagasi";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import Rules from "./pages/Rules";
import Faq from "./pages/Faq";
import Login from "./pages/Login";
import User from "./pages/User";
import JualBagasi from "./pages/bagasi/CreateBagasi";
import UpdateBagasi from "./pages/bagasi/UpdateBagasi";
import ListOrder from "./pages/order/ListOrder";
import CreateOrder from "./pages/order/CreateOrder";
import UpdateOrder from "./pages/order/UpdateOrder";
import AdminBagasiStatus from "./pages/admin/AdminBagasiStatus";
import AdminOrderStatus from "./pages/admin/AdminOrderStatus";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route
              path="list-bagasi"
              element={
                <ProtectedRoute>
                  <ListBagasi />
                </ProtectedRoute>
              }
            />
            <Route
              path="create-bagasi"
              element={
                <ProtectedRoute>
                  <JualBagasi />
                </ProtectedRoute>
              }
            />
            <Route
              path="update-bagasi/:id"
              element={
                <ProtectedRoute>
                  <UpdateBagasi />
                </ProtectedRoute>
              }
            />
            <Route
              path="order"
              element={
                <ProtectedRoute>
                  <ListOrder />
                </ProtectedRoute>
              }
            />
            <Route
              path="create-order/:id"
              element={
                <ProtectedRoute>
                  <CreateOrder />
                </ProtectedRoute>
              }
            />
            <Route
              path="update-order/:id"
              element={
                <ProtectedRoute>
                  <UpdateOrder />
                </ProtectedRoute>
              }
            />
            <Route
              path="user"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
            <Route
              path="admin/status-bagasi/:id"
              element={<AdminBagasiStatus />}
            />
            <Route
              path="admin/status-order/:id"
              element={<AdminOrderStatus />}
            />
            <Route path="about" element={<About />} />
            <Route path="rules" element={<Rules />} />
            <Route path="faq" element={<Faq />} />
            <Route path="login" element={<Login />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#f7f8fe",
            color: "#0b2471",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
