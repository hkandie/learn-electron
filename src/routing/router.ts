import { fakeAuthProvider } from "@/auth/auth-provider";
import { LoginPage } from "@/home/Login";
import { ProtectedPage } from "@/home/ProtectedPage";
import { PublicPage } from "@/home/PublicPage";
import { loginAction, loginLoader, protectedLoader } from "@/home/actions";
import { Layout } from "@/home/home";
import {
    Form,
    Link,
    Outlet,
    RouterProvider,
    createBrowserRouter,
    redirect,
    useActionData,
    useFetcher,
    useLocation,
    useNavigation,
    useRouteLoaderData,
  } from "react-router-dom";
export const router = createBrowserRouter([
    {
      id: "root",
      path: "/",
      loader() {
        // Our root route always provides the user, if logged in
        return { user: fakeAuthProvider.username };
      },
      Component: Layout,
      children: [
        {
          index: true,
          Component: PublicPage,
        },
        {
          path: "login",
          action: loginAction,
          loader: loginLoader,
          Component: LoginPage,
        },
        {
          path: "protected",
          loader: protectedLoader,
          Component: ProtectedPage,
        },
      ],
    },
    {
      path: "/logout",
      async action() {
        // We signout in a "resource route" that we can hit from a fetcher.Form
        await fakeAuthProvider.signout();
        return redirect("/");
      },
    },
  ]);