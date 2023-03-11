import { useEffect } from 'react';

export const useDocumentTitle = (title) => {
  useEffect(
    function setDocumentTitle() {
      document.title = `${process.env.REACT_APP_BASE_TITLE} :: ${title}`;

      return function setDefaultDocumentTitle() {
        document.title = process.env.REACT_APP_BASE_TITLE;
      };
    },
    [title]
  );
};
