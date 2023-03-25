import { useState, useEffect } from 'react';

import { feathers } from '../../../apis/feathers';

import { toast } from 'react-toastify';

export const useGetSurveyQuery = (surveyId) => {
  const [survey, setSurvey] = useState({});

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(
    function getSurvey() {
      if (!surveyId) {
        return;
      }

      setIsLoading(true);
      setIsError(false);

      feathers.client
        .service('surveys')
        .get(surveyId)
        .then((result) => setSurvey(result))
        .catch((error) => {
          toast.error(error.message, { toastId: 'use-get-survey-query' });
          setIsError(true);
        })
        .finally(() => setIsLoading(false));
    },
    [surveyId]
  );

  return { survey: survey, isLoading: isLoading, isError: isError };
};
