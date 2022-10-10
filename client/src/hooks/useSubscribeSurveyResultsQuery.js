import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { feathers } from '../redux';

export const useSubscribeSurveyResultsQuery = (surveyId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const subscribe = () => {
      if (surveyId) {
        dispatch(feathers.survey.subscribe({ surveyId: surveyId }));
      }
    };

    subscribe();

    return () => {
      const unsubscribe = () => {
        if (surveyId) {
          dispatch(feathers.survey.unsubscribe({ surveyId: surveyId }));
        }
      };

      unsubscribe();
    };
  }, [surveyId, dispatch]);
};
