import Head from 'next/head';
import Router from 'next/router'
import { Spring, animated } from 'react-spring';
import styles from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const linkClickHandler = () => {
    Router.push('/listings')
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Real Estate App</title>
      </Head>
      <div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-vcentered">
              <div className="column is-5 is-offset-1">
                <Spring
                  loop
                  from={{ opacity: 0.5, color: '#00bfa6', fontWeight: 'bold' }}
                  to={[{ opacity: 1, color: '#319795', fontWeight: 'bold' },
                  { opacity: 1, color: '#4a5568', fontWeight: 'bold' }]}
                  config={{ duration: 4000 }}
                >
                  {styles => (
                    <animated.div style={styles}>
                      <div className="has-text-centered">
                        <p className="is-size-2">Real Estate App</p>
                      </div>
                    </animated.div>
                  )}
                </Spring>
                <br />
                <button className="button is-primary is-outlined is-medium" onClick={linkClickHandler}>
                  Here are available listings
                  &nbsp;
                  <FontAwesomeIcon icon={faHome} />
                </button>
              </div>
              <div className="column is-5">
                <figure className="image">
                  <img className={styles.logo} src="/images/select_house.svg" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
