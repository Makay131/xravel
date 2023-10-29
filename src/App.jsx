import { RouterProvider } from 'react-router-dom';
import {routes} from './router/routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
  <>
  <RouterProvider router={routes} />
  <Toaster position="top-center" gutter={12} containerStyle={{top: "10%"}} toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "rgb(41, 39, 36)",
            color: "white",
            border: '1px solid #ffa500',
            top: "100px"
          }
        }} />
  </>)
}

export default App;