import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { feathers } from '../redux';

export const useSubscribeSurveyResultsQuery = (surveyId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const subscribe = () => {
      if (surveyId) {
        dispatch(feathers.subscription.create({ surveyId: surveyId }));
      }
    };

    subscribe();

    return () => {
      const unsubscribe = () => {
        if (surveyId) {
          dispatch(feathers.subscription.remove({ surveyId: surveyId }));
        }
      };

      unsubscribe();
    };
  }, [surveyId, dispatch]);
};
