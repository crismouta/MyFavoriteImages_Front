import React from 'react'
import { render } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { test, } from "vitest";
import MyImage from '../pages/MyImage';
import { describe } from 'vitest';

describe('Testing MyImage component', () => {
    test('should render correctly', () => {
        render(MyImage);
    })
    test('should render by route correctly', () => {
        const router = createMemoryRouter([{ path: '/', element: <MyImage /> }]);
        render(<RouterProvider router={router} />);
    });
});
