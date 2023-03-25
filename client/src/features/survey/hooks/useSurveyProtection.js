import { useState, useEffect } from 'react';

import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import { feathers } from '../../../apis/feathers';

export const useSurveyProtection = (surveyId, isIPProtectionEnabled) => {
  const [isIPDisallowed, setIsIPDisallowed] = useState(false);

  const { executeRecaptcha } = useGoogleReCaptcha();

  useEffect(
    function checkIfIPDisallowed() {
      if (!surveyId) {
        return;
      }

      if (!isIPProtectionEnabled) {
        return;
      }

      feathers.client
        .service('votes')
        .get(surveyId)
        .then((result) => setIsIPDisallowed(result.voted))
        .catch((error) => console.error(error));
    },
    [surveyId, isIPProtectionEnabled]
  );

  return {
    isIPDisallowed: isIPDisallowed,
    getCaptchaToken: executeRecaptcha,
  };
};
