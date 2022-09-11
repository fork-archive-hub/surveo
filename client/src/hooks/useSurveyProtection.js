import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import { feathers } from '../redux';

export const useSurveyProtection = (survey) => {
  const [isIPDisallowed, setIsIPDisallowed] = useState(false);

  const { executeRecaptcha } = useGoogleReCaptcha();

  const dispatch = useDispatch();

  useEffect(() => {
    const checkIfIPDisallowed = async () => {
      if (Boolean(survey._id) && survey.protection.ipRestriction) {
        const result = await dispatch(feathers.vote.get({ surveyId: survey._id }));

        if (!result.error) {
          setIsIPDisallowed(result.payload.voted);
        }
      }
    };

    checkIfIPDisallowed();
  }, [survey._id, survey.protection, dispatch]);

  return {
    isIPDisallowed: isIPDisallowed,
    getCaptchaToken: executeRecaptcha,
  };
};
