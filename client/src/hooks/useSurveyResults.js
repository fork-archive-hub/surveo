import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { feathers } from '../redux';

import { toast } from 'react-toastify';

export const useSurveyResults = (surveyId) => {
  const [isLoading, setIsLoading] = useState(true);

  const survey = useSelector((state) => state.survey.data);
  const dispatch = useDispatch();

  useEffect(() => {
    const getSurvey = async (surveyId) => {
      if (surveyId !== null) {
        const result = await dispatch(feathers.survey.get({ surveyId: surveyId }));

        if (result.error) {
          toast.error(result.error, {
            toastId: 'use-survey-results-hook-error',
          });
        }

        setIsLoading(false);
      }
    };

    getSurvey(surveyId);
  }, [surveyId, dispatch]);

  useEffect(() => {
    const subscribe = () => {
      if (survey._id && !isLoading) {
        dispatch(feathers.survey.subscribe({ surveyId: survey._id }));
      }
    };

    subscribe();

    return () => {
      const unsubscribe = () => {
        if (survey._id && !isLoading) {
          dispatch(feathers.survey.unsubscribe({ surveyId: survey._id }));
        }
      };

      unsubscribe();
    };
  }, [survey._id, isLoading, dispatch]);

  return { survey, isLoading };
};
