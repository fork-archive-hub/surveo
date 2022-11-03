import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { feathers } from '../redux';

import { toast } from 'react-toastify';

export const useGetUserSurveysQuery = (userId, limit) => {
  const [surveys, setSurveys] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    const getUserSurveys = async () => {
      if (!userId) {
        return;
      }

      setIsLoading(true);

      const result = await dispatch(
        feathers.survey.find({
          authorId: userId,
          skip: (currentPage - 1) * limit,
          limit: limit,
        })
      );

      if (result.error) {
        toast.error(result.error, {
          toastId: 'use-get-user-surveys-query',
        });
        setIsLoading(false);
        return;
      }

      setSurveys(result.payload.data);
      setPageCount(Math.ceil(result.payload.total / limit));
      setIsLoading(false);
    };

    getUserSurveys();
  }, [userId, limit, currentPage, dispatch]);

  return {
    surveys: surveys,
    isLoading: isLoading,
    page: {
      current: currentPage,
      count: pageCount,
      set: setCurrentPage,
    },
  };
};
