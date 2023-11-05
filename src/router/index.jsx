import { createBrowserRouter } from 'react-router-dom';
import MyImage from "../pages/MyImage";
import Layout from '../layout/Layout';
import MyImageById from '../pages/MyImageById';
import AddOrUpdateImage from '../pages/AddOrUpdateImage';
import Home from '../pages/Home';
import DeleteImage from '../pages/DeleteImage';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/images",
                element: <MyImage />
            },
            {
                path: "/image/:id",
                element: <MyImageById />
            },

            {
                path: "/create-image",
                element: <AddOrUpdateImage />
            },

            {
                path: "/edit-image/:id",
                element: <AddOrUpdateImage />
            },
            {
                path: "/delete/:id",
                element: <DeleteImage />
            }
        ]
    }
]);