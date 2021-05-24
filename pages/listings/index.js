import React from "react";
import Head from 'next/head';
import { ListingsList } from '../../components/ListingsList';
import styles from './index.module.scss';

export default function Listings({ houses }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Houses for Sale</title>
      </Head>
      <div>
        <ListingsList listings={houses} />
      </div>
    </div>
  )
};

Listings.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/houses');
  const { data } = await res.json();
  return { houses: data };
};
