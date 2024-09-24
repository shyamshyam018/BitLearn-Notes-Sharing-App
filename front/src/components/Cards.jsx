import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import defaultImage from '../img/image.png'; 

export default function Card({ uploads, error, handleLike }) {
  return (
    <div className="dash p-4">
      <div className="dash-main-admin">
        {error && <p className="text-red-500">{`Error: ${error}`}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {uploads.map((upload) => (
            <div
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              key={upload._id}
            >
              <a href={upload.link} target="_blank" rel="noopener noreferrer">
                <img
                  className="rounded-t-lg"
                  src={upload.image || defaultImage}
                  alt={upload.subject}
                />
              </a>
              <div className="p-5">
                <a href={upload.link} target="_blank" rel="noopener noreferrer">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {upload.subject}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {upload.description || 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'}
                </p>
                <p
                  onClick={() => handleLike(upload._id)}
                  className="flex cursor-pointer text-red-500 hover:text-red-700 mb-3"
                >
                  <FontAwesomeIcon icon={faHeart} className="mr-1" /> {upload.points}
                </p>
                <div className="box-down flex justify-between items-center">
                  <p className="user text-white">Author: {upload.user.firstName}</p>
                  <a
                    href={upload.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Inspect
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
