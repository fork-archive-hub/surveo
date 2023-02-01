import { useState, useEffect } from 'react';

import { feathers } from '../../../api/feathers';

import { toast } from 'react-toastify';

export const useGetSurveyQuery = (surveyId) => {
  const [survey, setSurvey] = useState({});

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getSurvey = async () => {
      try {
        if (!surveyId) {
          return;
        }

        setIsLoading(true);
        setIsError(false);

        const result = await feathers.client.service('surveys').get(surveyId);

        setSurvey(result);
      } catch (error) {
        toast.error(error.message, { toastId: 'use-get-survey-query' });
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getSurvey();
  }, [surveyId]);

  return { survey: survey, isLoading: isLoading, isError: isError };
};
