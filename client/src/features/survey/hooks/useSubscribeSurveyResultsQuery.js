import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { feathers } from '../../../redux';

export const useSubscribeSurveyResultsQuery = (surveyId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const subscribe = () => {
      try {
        if (surveyId) {
          dispatch(feathers.subscription.create({ surveyId: surveyId }));
        }
      } catch (error) {
        console.error(error);
      }
    };

    subscribe();

    return () => {
      const unsubscribe = () => {
        try {
          if (surveyId) {
            dispatch(feathers.subscription.remove({ surveyId: surveyId }));
          }
        } catch (error) {
          console.error(error);
        }
      };

      unsubscribe();
    };
  }, [surveyId, dispatch]);
};
