import { ListingsListItem } from './ListingsListItem';
import styles from './listings-list.module.scss';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight, faAngleRight, faAngleLeft, faSearch, faFilter, faHome } from '@fortawesome/free-solid-svg-icons';

export function ListingsList ({ listings }) {
  if (!listings || listings.length === 0) {
    return <span className={styles.message}>Nothing was found.</span>;
  };
  const [searchTerm, setSearchTerm] = useState('');
  const [searchFilter, setSearchFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [listingsPerPage] = useState(9);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(listings.filter((item) => {
    if (searchFilter === 'all') {
      if (searchTerm === '') {
        return item;
      } else if (item.product.toLowerCase().includes(searchTerm.toLowerCase())) {
        return item;
      }
    } else {
      if (searchTerm === '' && item.type.includes(searchFilter)) {
        return item;
      } else if (item.product.toLowerCase().includes(searchTerm.toLowerCase()) && item.type.includes(searchFilter)) {
        return item;
      }
    }
  }).length / listingsPerPage); i++) {
    pageNumbers.push(i);
  }
  const indexOfLastListing = currentPage * listingsPerPage;
  const indexOfFirstListing = indexOfLastListing - listingsPerPage;
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, searchFilter]);

  return (

    <div className="columns">
      <div className="column is-full">
        <section className="section mb-0">
            <h1 className="title"><FontAwesomeIcon icon={faHome} />&nbsp;Houses for Sale</h1>
            <div className="notification">
              <nav className="level">
                <div className="level-left">
                  <div className="level-item">
                    <p className="subtitle is-5">
                      <strong>{listings.filter((item) => {
                        if (searchFilter === 'all') {
                          if (searchTerm === '') {
                            return item;
                          } else if (item.product.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return item;
                          }
                        } else {
                          if (searchTerm === '' && item.type.includes(searchFilter)) {
                            return item;
                          } else if (item.product.toLowerCase().includes(searchTerm.toLowerCase()) && item.type.includes(searchFilter)) {
                            return item;
                          }
                        }
                      }).length}</strong> houses
                    </p>
                  </div>
                  <div className="level-item">
                    <div className="field has-addons">
                      <p className="control has-icons-left">
                        <input className="input" type="text" placeholder="search a house..." onChange={(event) => setSearchTerm(event.target.value)} />
                        <span className="icon is-small is-left">
                          <FontAwesomeIcon icon={faSearch} />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="level-right is-size-6 has-text-grey">
                  <FontAwesomeIcon icon={faFilter} />
                  &nbsp;
                  <div className="control">
                    <label className="radio">
                    <input type="radio" name="filter" onChange={() => setSearchFilter('all')} checked={searchFilter === 'all'} />
                      &nbsp;All
                    </label>
                    <label className="radio">
                    <input type="radio" name="filter" onChange={() => setSearchFilter('SingleFamily')} />
                      &nbsp;SingleFamily
                    </label>
                    <label className="radio">
                    <input type="radio" name="filter" onChange={() => setSearchFilter('MultiFamily')} />
                      &nbsp;MultiFamily
                    </label>
                  </div>
                </div>
              </nav>
              <div className="buttons has-addons is-centered">
                <button className="button" onClick={() => setCurrentPage(1)}>
                  <FontAwesomeIcon icon={faAngleDoubleLeft} />
                </button>
                <button className="button" onClick={() => setCurrentPage(currentPage !== 1 ? currentPage - 1 : 1)}>
                  <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <button className="button is-static">
                  {currentPage} of {pageNumbers.length}
                </button>
                <button className="button" onClick={() => setCurrentPage(currentPage < pageNumbers.length ? currentPage + 1 : pageNumbers.length)}>
                  <FontAwesomeIcon icon={faAngleRight} />
                </button>
                <button className="button" onClick={() => setCurrentPage(pageNumbers.length)}>
                  <FontAwesomeIcon icon={faAngleDoubleRight} />
                </button>
              </div>
            </div>
          </section>
        <div className={styles.listingsList}>
          {listings.filter((item) => {
            if (searchFilter === 'all') {
              if (searchTerm === '') {
                return item;
              } else if (item.product.toLowerCase().includes(searchTerm.toLowerCase())) {
                return item;
              }
            } else {
              if (searchTerm === '' && item.type.includes(searchFilter)) {
                return item;
              } else if (item.product.toLowerCase().includes(searchTerm.toLowerCase()) && item.type.includes(searchFilter)) {
                return item;
              }
            }
          }).slice(indexOfFirstListing, indexOfLastListing).map((item) => (
                <ListingsListItem key={item._id} item={item}></ListingsListItem>
              ))}
        </div>
        <section className="section">
            <div className="notification">
              <div className="buttons has-addons is-centered">
                <button className="button" onClick={() => setCurrentPage(1)}>
                  <FontAwesomeIcon icon={faAngleDoubleLeft} />
                </button>
                <button className="button" onClick={() => setCurrentPage(currentPage !== 1 ? currentPage - 1 : 1)}>
                  <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <button className="button is-static">
                  {currentPage} of {pageNumbers.length}
                </button>
                <button className="button" onClick={() => setCurrentPage(currentPage < pageNumbers.length ? currentPage + 1 : pageNumbers.length)}>
                  <FontAwesomeIcon icon={faAngleRight} />
                </button>
                <button className="button" onClick={() => setCurrentPage(pageNumbers.length)}>
                  <FontAwesomeIcon icon={faAngleDoubleRight} />
                </button>
              </div>
            </div>
          </section>
      </div>
    </div>
  );
};
