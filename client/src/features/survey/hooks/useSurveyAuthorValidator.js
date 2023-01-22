import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

export const useSurveyAuthorValidator = (isActive, survey, user, redirectPath) => {
  const navigate = useNavigate();

  useEffect(() => {
    const validateSurveyAuthor = () => {
      if (!survey._id || !isActive) {
        return;
      }

      if (survey.authorId !== user._id) {
        toast.error('You are not authorized to access this page', { toastId: 'use-survey-author-validator' });
        navigate(redirectPath);
      }
    };

    validateSurveyAuthor();
  }, [isActive, survey._id, survey.authorId, user._id, redirectPath, navigate]);
};
