import { useState, useEffect } from 'react';

import { feathers } from '../../../api/feathers';

import { toast } from 'react-toastify';

export const useGetSurveyResultsQuery = (surveyId) => {
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
        toast.error(error.message, { toastId: 'use-get-survey-results-query' });
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getSurvey();
  }, [surveyId]);

  useEffect(() => {
    const updateSurvey = (survey) => {
      setSurvey(survey);
    };

    const subscribeSurvey = async () => {
      try {
        if (!surveyId) {
          return;
        }

        feathers.client.service('votes').on('created', updateSurvey);
        await feathers.client.service('subscriptions').create({ surveyId: surveyId });
      } catch (error) {
        toast.error(error.message, { toastId: 'use-get-survey-results-query' });
      }
    };

    subscribeSurvey();
    return () => {
      const unsubscribeSurvey = async () => {
        try {
          if (!surveyId) {
            return;
          }

          feathers.client.service('votes').off('created', updateSurvey);
          await feathers.client.service('subscriptions').remove(surveyId);
        } catch (error) {
          toast.error(error.message, { toastId: 'use-get-survey-query' });
        }
      };

      unsubscribeSurvey();
    };
  }, [surveyId]);

  return { survey: survey, isLoading: isLoading, isError: isError };
};
