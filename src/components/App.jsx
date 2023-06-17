import { Routes, Route } from 'react-router-dom';
// import { BooksTable } from './BooksTable/BooksTable';
// import { AuthorBooks } from './AuthorBooks/AuthorBooks';
// import { Home } from './Home/Home';
import { lazy } from "react";

const Home = lazy(() => import("./Home/Home"));
const BooksTable = lazy(() => import("./BooksTable/BooksTable"));
const AuthorBooks = lazy(() => import("./AuthorBooks/AuthorBooks"));

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookstable" element={<BooksTable />} />
        <Route path="/authorbooks" element={<AuthorBooks />} />
        <Route path="*" element={<Home />} />
      </Routes>
  );
};
