import { createBrowserRouter } from 'react-router-dom';
import MyImage from "../pages/MyImage";
import Layout from '../layout/Layout';
import MyImageById from '../pages/MyImageById';
import AddNewImage from '../pages/AddNewImage';
import UpdateImage from '../pages/UpdateImage';

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

            {
                path: "/create-image",
                element: <AddNewImage />
            },

            {
                path: "/edit-image/:id",
                element: <UpdateImage />
            }
        ]
    }
]);