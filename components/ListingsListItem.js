import Link from 'next/link';
import styles from './listings-list-item.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faRuler, faWarehouse } from '@fortawesome/free-solid-svg-icons';

export function ListingsListItem ({ item }) {
  const cutDescription = (description) => {
    if (description.length > 100) {
      return description.slice(0, 100) + '...';
    }
    return description;
  };

  return (
    <div className={`${styles.listingsListItem} box`}>
      <figure className="image is-4by3">
          <img src={item.images[0]} alt="Placeholder image" />
      </figure>
      <div className={styles.itemName}>
        <Link href="/listing/[id]" as={`/listing/${item._id}`}>
          <a>{item.product}</a>
        </Link>
        <p className="is-italic has-text-grey-light">{item.type}</p>
        <div className={styles.language}>
          <span>$ {item.price} (USD)</span>
        </div>
      </div>
      <p className={styles.className}>{cutDescription(item.description)}</p>
      <div className={styles.footer}>
        <div className={styles.counters}>
          <div className={styles.counter}>
            <span><FontAwesomeIcon icon={faBed} /> x {item.bedrooms}  |  <FontAwesomeIcon icon={faWarehouse} /> x {item.garage}</span>
          </div>
          <div className={styles.counter}>
            <span><FontAwesomeIcon icon={faRuler} /> {item.square} ft<sup>2</sup></span>
          </div>
        </div>
      </div>
    </div>
  );
};
