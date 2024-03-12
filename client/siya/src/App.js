import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import { Container } from "react-bootstrap";

function App() {
  const theme = {
    light: {
      primary: "#ECB365",
      secondary: " #fdf0d1",
      tetiary: "#85586F",
      text: "rgba(0,0,0,0.7)",
      smallText: "rgba(0, 0, 0, 0.8)",
    },
    size: {
      small: "13px",
      medium: "17px",
      large: "22px",
      extraLarge: "32px",
    },
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<HomePage />} />
        <Route path="/" element={<HomePage />} />

        <Route path="/*" element={<HomePage />} />
      </Route>
    )
  );
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <RouterProvider router={router} />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
