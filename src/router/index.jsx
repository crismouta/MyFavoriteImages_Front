import { createBrowserRouter } from 'react-router-dom';
import MyImage from "../pages/MyImage";
import Layout from '../layout/Layout';
import MyImageById from '../pages/MyImageById';

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
                path: "/image/:id",
                element: <MyImageById />
            },
        ]
    }
]);