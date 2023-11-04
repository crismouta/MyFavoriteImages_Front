import { createBrowserRouter } from 'react-router-dom';
import MyImage from "../pages/MyImage";
import Layout from '../layout/Layout';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <MyImage />
            },
            {
                path: "/project/:id",
                element: <MyImage />
            },
        ]
    }
]);