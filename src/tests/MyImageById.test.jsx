import React from 'react'
import { render } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { test, } from "vitest";
import MyImageById from '../pages/MyImageById';
import { describe } from 'vitest';

describe('Testing MyImageById component', () => {
    test('should render correctly', () => {
        render(MyImageById);
    })
    test('should render by route correctly', () => {
        const router = createMemoryRouter([{ path: '/', element: <MyImageById /> }]);
        render(<RouterProvider router={router} />);
    });
});