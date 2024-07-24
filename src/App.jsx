import { Route, Routes } from "react-router-dom";
import HomePage from './components/home/HomePage'
import Layout from './components/layout/Layout'
import ScrollToTop from'./components/shared/ScrollToTop'
import BlogPage from './components/blog/BlogPage'
import AuthorPage from './components/author/AuthorPage'

function App() {



  return (
    <>
     <Layout>
     <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:slug" element={<BlogPage />} />
        <Route path="/authors/:slug" element={<AuthorPage />} />
      </Routes>
       </Layout>
    </>
  )
}

export default App
