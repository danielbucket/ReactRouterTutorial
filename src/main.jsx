import * as React from 'react';
import * as ReactDom from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import './index.css';
import Root from './routes/root';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
	},
]);

ReactDom.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)