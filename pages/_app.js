import { NavBar } from '../components/NavBar';
import '../scss/styles.scss';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <NavBar></NavBar>
      <Component {...pageProps} />
    </div>
  )
};
