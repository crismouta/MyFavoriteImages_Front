import React from 'react'
import { render } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { test } from "vitest";
import Home from "../pages/Home";
import { describe } from 'vitest';

describe('Testing Home component', () => {
    test('should render correctly', () => {
        render(Home);
    })
    test('should render by route correctly', () => {
        const router = createMemoryRouter([{ path: '/', element: <Home /> }]);
        render(<RouterProvider router={router} />);
    });
});