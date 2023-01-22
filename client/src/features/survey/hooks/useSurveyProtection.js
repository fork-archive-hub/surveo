import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import { feathers } from '../../../redux';

export const useSurveyProtection = (survey) => {
  const [isIPDisallowed, setIsIPDisallowed] = useState(false);

  const { executeRecaptcha } = useGoogleReCaptcha();

  const dispatch = useDispatch();

  useEffect(() => {
    const checkIfIPDisallowed = async () => {
      try {
        if (!survey._id) {
          return;
        }

        if (!survey.protection.ipRestriction) {
          return;
        }

        const result = await dispatch(feathers.vote.get({ surveyId: survey._id }));

        setIsIPDisallowed(result.payload.voted);
      } catch (error) {
        console.error(error);
      }
    };

    checkIfIPDisallowed();
  }, [survey._id, survey.protection, dispatch]);

  return {
    isIPDisallowed: isIPDisallowed,
    getCaptchaToken: executeRecaptcha,
  };
};
