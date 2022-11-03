import { useEffect } from 'react';

export const useDocumentTitle = (title) => {
  useEffect(() => {
    const setDocumentTitle = () => {
      document.title = `${process.env.REACT_APP_BASE_TITLE} - ${title}`;
    };

    setDocumentTitle();
    return () => {
      const setDefaultDocumentTitle = () => {
        document.title = process.env.REACT_APP_BASE_TITLE;
      };

      setDefaultDocumentTitle();
    };
  }, [title]);
};
