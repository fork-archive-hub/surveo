import { MainLayout, PresentationLayout } from '../../layouts';

import Dashboard from '../../pages/Dashboard';
import SurveyEdit from '../../pages/SurveyEdit';
import SurveyDelete from '../../pages/SurveyDelete';
import SurveyCreate from '../../pages/SurveyCreate';
import SurveyResults from '../../pages/SurveyResults';

export const protectedRoutes = [
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
    ],
  },
  {
    element: <PresentationLayout />,
    children: [
      {
        path: 'surveys',
        children: [
          {
            path: 'create',
            element: <SurveyCreate />,
          },
          {
            path: ':surveyId',
            children: [
              {
                path: 'edit',
                element: <SurveyEdit />,
              },
              {
                path: 'delete',
                element: <SurveyDelete />,
              },
              {
                path: 'results',
                element: <SurveyResults />,
              },
            ],
          },
        ],
      },
    ],
  },
];
