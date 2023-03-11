import { useState, useEffect } from 'react';

import { feathers } from '../../../api/feathers';

import { toast } from 'react-toastify';

export const useFindSurveysQuery = (authorId, limit, page) => {
  const [surveys, setSurveys] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [pages, setPages] = useState(0);

  useEffect(
    function findSurveys() {
      if (!authorId) {
        return;
      }

      setIsLoading(true);
      setIsError(false);

      feathers.client
        .service('surveys')
        .find({
          query: {
            authorId: authorId,
            $skip: (page - 1) * limit,
            $limit: limit,
            $sort: {
              createdAt: -1,
            },
          },
        })
        .then((result) => {
          setSurveys(result.data);
          setPages(Math.ceil(result.total / limit));
        })
        .catch((error) => {
          toast.error(error.message, { toastId: 'use-find-surveys-query' });
          setIsError(true);
        })
        .finally(() => setIsLoading(false));
    },
    [authorId, limit, page]
  );

  return { surveys: surveys, isLoading: isLoading, isError: isError, pages: pages };
};
