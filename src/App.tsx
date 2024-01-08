import {
  RouterProvider
} from "react-router-dom";
import { fakeAuthProvider } from "./auth/auth-provider";
import { router } from "./routing/router";



export default function App() {
  return (
    <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
  );
}
