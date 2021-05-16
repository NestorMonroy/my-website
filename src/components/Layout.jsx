import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, dimensions }) => (
  <div>
    <Header dimensions={dimensions} />
    {children}
    <Footer />
  </div>
);

export default Layout;
