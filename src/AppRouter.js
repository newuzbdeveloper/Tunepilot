import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router-dom";
import Layout from "Components/Layout";
import Home from "Pages/Home";
import Search from "Pages/Search";
import Error from "Pages/Error";
import Genre from "Pages/Genre";
import Artist from "Pages/Artist";

function AppRouter() {
  return (
    <ErrorBoundary fallback={<Error isErrorPage />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/genres/:genreId" element={<Genre />} />
          <Route path="/artists/:artistId" element={<Artist />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default AppRouter;
