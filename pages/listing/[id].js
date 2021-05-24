import React, { useState } from "react";
import Head from 'next/head';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faMapMarkedAlt, faPhoneSquareAlt, faRuler, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import styles from './id.module.scss';
import { Slider } from "../../components/Slider";

export default function Item({ house }) {
  return (
    <div>
      <Head>
        <title>{house.product}</title>
      </Head>
      <div>
        <div className={styles.linkback}>
          <Link href="/listings">
            <a><FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: "#00bfa6"}} />&nbsp;Back</a>
          </Link>
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-vcentered">
              <div className="column is-5">
                <Slider imgArr={house.images} /> 
              </div>
              <div className="column is-6 is-offset-1">
                <h1 className="title is-2">
                  {house.product}
                </h1>
                <h2 className="subtitle is-4 is-italic has-text-grey">
                  {house.type}
                </h2>
                <article className="message is-warning">
                  <div className="message-body is-size-4 pb-0 pt-0">
                    <FontAwesomeIcon icon={faDollarSign} />&nbsp;{house.price}&nbsp;(USD)
                  </div>
                </article>
                <p className="has-text-justified">
                  {house.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="container">
        <div className="columns features">
          <div className="column is-4">
            <div className="card is-shady">
              <div className="card-image has-text-centered">
                <FontAwesomeIcon icon={faRuler} size="6x" style={{ color: "#00bfa6"}} />
              </div>
              <div className="card-content">
                <div className="content is-uppercase has-text-centered">
                  <h3 className="has-text-primary has-text-weight-bold">Parameters</h3>
                </div>
                <div className="content">
                  <table className="table is-striped">
                    <tbody>
                      <tr>
                        <th>bedrooms</th>
                        <td>{house.bedrooms}</td>
                      </tr>
                      <tr>
                        <th>garage</th>
                        <td>{house.garage}</td>
                      </tr>
                      <tr>
                        <th>bsement</th>
                        <td>{house.hasBasement ? 'yes' : 'no'}</td>
                      </tr>
                      <tr>
                        <th>square</th>
                        <td>{house.square} Square foots</td>
                      </tr>
                      <tr>
                        <th>amenities</th>
                        <td>
                        {house.amenities.map((it) => (
                          <p style={{marginBottom: '0px'}} key={it}>{it}</p>
                        ))}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="card is-shady">
              <div className="card-image has-text-centered">
                <FontAwesomeIcon icon={faMapMarkedAlt} size="6x" style={{ color: "#00bfa6"}} />
              </div>
              <div className="card-content">
                <div className="content is-uppercase has-text-centered">
                  <h3 className="has-text-primary has-text-weight-bold">Address</h3>
                </div>
                <div className="content">
                  <table className="table is-striped">
                    <tbody>
                      <tr>
                        <th>street</th>
                        <td>{house.address.street}</td>
                      </tr>
                      <tr>
                        <th>city</th>
                        <td>{house.address.city}</td>
                      </tr>
                      <tr>
                        <th>state</th>
                        <td>{house.address.state}</td>
                      </tr>
                      <tr>
                        <th>zip</th>
                        <td>{house.address.zip}</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                    <a href={`http://maps.google.com/maps?q=${house.address.coordinates.latitude},${house.address.coordinates.longitude}&z=17`} target="_blank">
                      <button class="button is-outlined is-fullwidth is-medium">
                        <span>See on GoogleMap</span>
                        <span className="icon">
                          <img src="/images/googlemap.gif" />
                        </span>
                      </button>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="card is-shady">
              <div className="card-image has-text-centered">
                <FontAwesomeIcon icon={faPhoneSquareAlt} size="6x" style={{ color: "#00bfa6"}} />
              </div>
              <div className="card-content">
                <div className="content is-uppercase has-text-centered">
                  <h3 className="has-text-primary has-text-weight-bold">Сontacts</h3>
                </div>
                <div className="content">
                  <table className="table is-striped">
                    <tbody>
                      <tr>
                        <th>builder</th>
                        <td>{house.builder}</td>
                      </tr>
                      <tr>
                        <th>phone</th>
                        <td>{house.phone}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
};

Item.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/houses/${id}`);
  const { data } = await res.json();
  return { house: data };
};
