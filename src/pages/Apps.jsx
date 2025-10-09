import React, { useState } from 'react';
import useApps from '../Hooks/useApps';
import Card from '../components/Card';
import Spinner from './Spinner';

const Apps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState('');
  const [searchLoading, setSearchLoading] = useState(false);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    setSearchLoading(true);

    // short fake loading (no debounce)
    setTimeout(() => {
      setSearchLoading(false);
    }, 400);
  };

  const term = search.trim().toLowerCase();
  const filteredApps = term
    ? apps.filter((app) => app.title.toLowerCase().includes(term))
    : apps;

  return (
    <div className="w-11/12 mx-auto py-[40px]">
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <Spinner />
        </div>
      ) : (
        <>
          <div className="text-center">
            <h1 className="text-[#001931] font-bold text-[48px]">
              Our All Applications
            </h1>
            <p className="text-[#627382] text-xl">
              Explore All Apps on the Market developed by us. We code for Millions
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center pt-[40px] gap-4 md:gap-0">
            <div className="text-center md:text-left text-xl md:text-2xl font-semibold">
              ({filteredApps?.length || 0}) Apps Found
            </div>

            <div className="flex justify-center md:justify-end w-full md:w-auto">
              <label className="flex items-center gap-2 w-full max-w-[400px] px-3 py-2 bg-white rounded-lg shadow-sm">
                <svg
                  className="h-[1.2em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>

                <input
                  onChange={handleSearch}
                  value={search}
                  type="search"
                  placeholder="Search Apps"
                  className="w-full outline-none text-sm md:text-base"
                />
              </label>
            </div>
          </div>
          {searchLoading ? (
            <div className="flex justify-center items-center py-16">
              <Spinner />
            </div>
          ) : filteredApps.length === 0 ? (
            <p className="text-center text-lg text-gray-600 py-10">No apps found.</p>
          ) : (
            <div className="py-[40px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[16px]">
              {filteredApps.map((app, index) => (
                <Card key={index} app={app} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Apps;