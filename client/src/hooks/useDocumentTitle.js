import { useEffect } from 'react';

export const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `${process.env.REACT_APP_BASE_TITLE} - ${title}`;
    return () => {
      document.title = process.env.REACT_APP_BASE_TITLE;
    };
  }, [title]);
};
