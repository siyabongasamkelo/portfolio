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
    dark: {
      primary: "#e8751a",
      secondary: " #113946",
      tetiary: "#fffdcb",
      text: "rgba(225, 225, 225, 0.9);",
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
