import { useState, useEffect } from 'react';

import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import { feathers } from '../../../api/feathers';

export const useSurveyProtection = (surveyId, isIPProtectionEnabled) => {
  const [isIPDisallowed, setIsIPDisallowed] = useState(false);

  const { executeRecaptcha } = useGoogleReCaptcha();

  useEffect(() => {
    const checkIfIPDisallowed = async () => {
      try {
        if (!surveyId) {
          return;
        }

        if (!isIPProtectionEnabled) {
          return;
        }

        const result = await feathers.client.service('votes').get(surveyId);

        setIsIPDisallowed(result.voted);
      } catch (error) {
        console.error(error);
      }
    };

    checkIfIPDisallowed();
  }, [surveyId, isIPProtectionEnabled]);

  return {
    isIPDisallowed: isIPDisallowed,
    getCaptchaToken: executeRecaptcha,
  };
};
