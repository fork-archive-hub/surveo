import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { feathers } from '../../../redux';

import { toast } from 'react-toastify';

export const useGetSurveyQuery = (surveyId) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const survey = useSelector((state) => state.survey.data);
  const dispatch = useDispatch();

  useEffect(() => {
    const getSurvey = async () => {
      try {
        if (surveyId === null) {
          return;
        }

        setIsLoading(true);
        setIsError(false);

        await dispatch(feathers.survey.get({ surveyId: surveyId }));
      } catch (error) {
        toast.error(error.message, { toastId: 'use-get-survey-query' });
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getSurvey();
  }, [surveyId, dispatch]);

  return {
    survey: survey,
    isLoading: isLoading,
    isError: isError,
  };
};
