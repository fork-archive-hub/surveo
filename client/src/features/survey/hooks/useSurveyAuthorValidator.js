import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

export const useSurveyAuthorValidator = (isActive, authorId, userId, redirectPath) => {
  const navigate = useNavigate();

  useEffect(
    function validateSurveyAuthor() {
      if (!isActive) {
        return;
      }

      if (authorId !== userId) {
        toast.error('You are not authorized to access this page', { toastId: 'use-survey-author-validator' });
        navigate(redirectPath);
      }
    },
    [isActive, authorId, userId, redirectPath, navigate]
  );
};
