import { MainLayout } from '../components/Layout';

import Dashboard from '../pages/Dashboard';
import SurveyEdit from '../pages/SurveyEdit';
import SurveyDelete from '../pages/SurveyDelete';

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
];
