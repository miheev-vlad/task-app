import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';

export function NavBar() {
  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link href="/">
          <a className="navbar-item is-size-6 has-text-weight-bold">
            <FontAwesomeIcon icon={faMobileAlt} />
            &nbsp;Real Estate App
          </a>
        </Link>
      </div>
    </nav>
  );
};
