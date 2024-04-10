import { routes } from "@/router/routes.ts";
import { createBrowserRouter } from "react-router-dom";
import SignIn from "@/pages/sign-in.tsx";
import ProtectedRoute from "@/router/protected-route.tsx";
import Landing from "@/pages/landing.tsx";
import Device from "@/pages/device.tsx";
import Register from "@/pages/register.tsx";
import Dashboard from "@/pages/dashboard.tsx";
import Admin from "@/pages/admin.tsx";

export const router = createBrowserRouter([
  {
    path: routes.LANDING,
    element: <Landing />,
  },
  {
    path: routes.ADMIN,
    element: (
      <ProtectedRoute>
        <Admin />
      </ProtectedRoute>
    ),
  },
  {
    path: routes.DEVICE,
    element: (
      <ProtectedRoute>
        <Device />
      </ProtectedRoute>
    ),
    children: [
      {
        path: routes.DEVICE + "/:id",
        element: (
          <ProtectedRoute>
            <Device />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: routes.DASHBOARD,
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: routes.SIGNIN,
    element: <SignIn />,
  },
  {
    path: routes.REGISTER,
    element: <Register />,
  },
  {
    path: routes.UNDEFINED,
    element: <div>Hello world</div>,
  },
]);
