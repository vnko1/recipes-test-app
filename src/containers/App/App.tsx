import { BrowserRouter, Routes, Route } from "react-router";
import {
  Layout,
  HomePage,
  RecipePage,
  FavoritesPage,
  ErrorPage,
} from "../../pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="recipes/:id" element={<RecipePage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
