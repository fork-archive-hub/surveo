import { useState, useEffect } from 'react';

import { feathers } from '../../../api/feathers';

import { toast } from 'react-toastify';

export const useGetSurveyResultsQuery = (surveyId) => {
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
          toast.error(error.message, { toastId: 'use-get-survey-results-query' });
          setIsError(true);
        })
        .finally(() => setIsLoading(false));
    },
    [surveyId]
  );

  useEffect(
    function subscribeSurveyResults() {
      if (!surveyId) {
        return;
      }

      const updateSurvey = (survey) => {
        setSurvey(survey);
      };

      setIsError(false);

      feathers.client
        .service('subscriptions')
        .create({ surveyId: surveyId })
        .then(() => {
          feathers.client.service('votes').on('created', updateSurvey);
        })
        .catch(() => {
          setIsError(true);
        });

      return function unsubscribeSurveyResults() {
        if (!surveyId) {
          return;
        }

        setIsError(false);

        feathers.client
          .service('subscriptions')
          .remove(surveyId)
          .then(() => {
            feathers.client.service('votes').off('created', updateSurvey);
          })
          .catch(() => {
            setIsError(true);
          });
      };
    },
    [surveyId]
  );

  return { survey: survey, isLoading: isLoading, isError: isError };
};
