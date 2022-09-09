import { MainLayout, PresentationLayout } from '../layouts';

import Dashboard from '../pages/Dashboard';
import SurveyEdit from '../pages/SurveyEdit';
import SurveyDelete from '../pages/SurveyDelete';
import SurveyCreate from '../pages/SurveyCreate';
import SurveyResults from '../pages/SurveyResults';

export const protectedRoutes = [
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
        children: [
          {
            path: '/surveys/:surveyId/edit',
            element: <SurveyEdit />,
          },
          {
            path: '/surveys/:surveyId/delete',
            element: <SurveyDelete />,
          },
        ],
      },
    ],
  },
  {
    element: <PresentationLayout />,
    children: [
      {
        path: '/surveys/create',
        element: <SurveyCreate />,
      },
      {
        path: '/surveys/:surveyId/results',
        element: <SurveyResults />,
      },
    ],
  },
];
