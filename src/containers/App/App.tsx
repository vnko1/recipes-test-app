import { BrowserRouter, Routes, Route } from "react-router";
import { HomePage, RecipePage, FavoritesPage, ErrorPage } from "../../pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="recipes/:id" element={<RecipePage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
