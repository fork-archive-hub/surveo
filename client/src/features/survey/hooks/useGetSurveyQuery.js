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
      if (surveyId === null) {
        return;
      }

      setIsLoading(true);
      setIsError(false);

      const result = await dispatch(feathers.survey.get({ surveyId: surveyId }));

      if (result.error) {
        toast.error(result.error, {
          toastId: 'use-get-survey-query',
        });
        setIsLoading(false);
        setIsError(true);
        return;
      }

      setIsLoading(false);
    };

    getSurvey();
  }, [surveyId, dispatch]);

  return {
    survey: survey,
    isLoading: isLoading,
    isError: isError,
  };
};
