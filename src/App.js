import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Destinations from './pages/Destinations';
import DestinationDetails from './pages/DestinationDetails';
import Packages from './pages/Packages';
import PackageDetails from './pages/PackageDetails';
import Blogs from './pages/Blogs';
import BlogDegails from './pages/BlogDegails';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import GuidesPage from './pages/GuidesPage';
import FaqPage from './pages/FaqPage';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/guides' element={<GuidesPage />} />
        <Route path='/faq' element={<FaqPage />} />

        <Route path='/destinations'>
          <Route index element={<Destinations />} />
          <Route path=':id' element={<DestinationDetails />} />
        </Route>

        <Route path='/packages' element={<Packages />} />
        <Route path='/packages/:id' element={<PackageDetails />} />

        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blogs/:id' element={<BlogDegails />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
