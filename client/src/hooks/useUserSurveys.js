import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { feathers } from '../redux';

import { toast } from 'react-toastify';

export const useUserSurveys = (userId, limit) => {
  const [surveys, setSurveys] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    const getUserSurveys = async () => {
      if (userId) {
        setIsLoading(true);

        const result = await dispatch(
          feathers.survey.find({
            authorId: userId,
            skip: (page - 1) * limit,
            limit: limit,
          })
        );

        if (result.error) {
          toast.error(result.error, {
            toastId: 'use-user-surveys-hook-error',
          });
        } else {
          setSurveys(result.payload.data);
          setPageCount(Math.ceil(result.payload.total / limit));
        }

        setIsLoading(false);
      }
    };

    getUserSurveys();
  }, [userId, page, limit, dispatch]);

  return {
    surveys: surveys,
    isLoading: isLoading,
    page: page,
    pageCount: pageCount,
    setPage: setPage,
  };
};
