import React, { useEffect, useState, useRef } from 'react';
import { allCountires, allCountiresByName } from '../calls/countries';
import CountryCard from './CountryCard';
import SearchCountries from './SearchCountries';

const CountiresContainer = () => {
  const [countries, setCountires] = useState([{ numericCode: '' }]);
  const componentIsMounted = useRef(true);
  const [isLoad, setLoad] = useState(true);
  const [checkNoResult, setNoResult] = useState(false);

  useEffect(() => {
    allCountires()
      .then((result) => {
        if (componentIsMounted.current) {
          setCountires(result);
          setLoad(false);
        }
      })
      .catch((err) => {
        console.log('Error to fetch data from api==>' + err);
      });

    return () => {
      componentIsMounted.current = false;
    };
  }, []);

  const handleText = (searchText: string) => {
    setLoad(true);
    if (searchText) {
      allCountiresByName(searchText)
        .then((result) => {
          //console.log('result==>' + JSON.stringify(result));
          if (componentIsMounted.current) {
            if (result.status === 404) {
              setNoResult(true);
            } else {
              setNoResult(false);
            }
            setCountires(result);
            setLoad(false);
          }
        })
        .catch((err) => {
          console.log('error==>' + err);
        });
    } else {
      allCountires()
        .then((result) => {
          if (componentIsMounted.current) {
            setCountires(result);
            setLoad(false);
          }
        })
        .catch((err) => {
          console.log('Error to fetch data from api==>' + err);
        });
    }
  };

  return (
    <>
      <SearchCountries onChange={handleText} />
      {isLoad
        ? 'Loading....'
        : checkNoResult
        ? 'No Result'
        : countries &&
          countries.map((country) => {
            return <CountryCard key={country.numericCode} country={country} />;
          })}
    </>
  );
};

export default CountiresContainer;
