import { Outlet } from 'react-router-dom';

import { Backdrop } from '@mui/material';

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
        element: (
          <>
            <Dashboard />
            <Outlet />
          </>
        ),
        children: [
          {
            path: '/surveys/:surveyId/edit',
            element: (
              <Backdrop open sx={{ p: 2 }}>
                <SurveyEdit />
              </Backdrop>
            ),
          },
          {
            path: '/surveys/:surveyId/delete',
            element: (
              <Backdrop open sx={{ p: 2 }}>
                <SurveyDelete />
              </Backdrop>
            ),
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
