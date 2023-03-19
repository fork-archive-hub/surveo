import { lazy } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { MainLayout } from './layouts/main';
import { HighlightLayout } from './layouts/highlight';

import Landing from './pages/Landing';

const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const SurveyEdit = lazy(() => import('./pages/SurveyEdit'));
const SurveyDelete = lazy(() => import('./pages/SurveyDelete'));
const SurveyCreate = lazy(() => import('./pages/SurveyCreate'));
const SurveyResults = lazy(() => import('./pages/SurveyResults'));
const SurveyQuestionnaire = lazy(() => import('./pages/SurveyQuestionnaire'));
const NotFound = lazy(() => import('./pages/NotFound'));

const AppRoutes = () => {
  const isAuthenticated = useSelector((state) => state.authentication.isAuthenticated);

  return (
    <Routes>
      {/* Common Routes */}
      <Route element={<HighlightLayout />}>
        <Route path="surveys">
          <Route index element={<Navigate to="/not-found" replace />} />
          <Route path=":surveyId">
            <Route index element={<Navigate to="questionnaire" replace />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* Protected Routes */}
      {isAuthenticated && (
        <>
          <Route element={<MainLayout />}>
            <Route index element={<Dashboard />} />
          </Route>
          <Route element={<MainLayout />}>
            <Route path="surveys">
              <Route path="create" element={<SurveyCreate />} />
              <Route path=":surveyId">
                <Route path="edit" element={<SurveyEdit />} />
                <Route path="delete" element={<SurveyDelete />} />
                <Route path="results" element={<SurveyResults />} />
                <Route path="questionnaire" element={<SurveyQuestionnaire />} />
              </Route>
            </Route>
          </Route>
        </>
      )}

      {/* Public Routes */}
      {!isAuthenticated && (
        <Route element={<HighlightLayout />}>
          <Route index element={<Landing />} />
          <Route path="auth">
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="surveys">
            <Route path=":surveyId">
              <Route path="questionnaire" element={<SurveyQuestionnaire />} />
            </Route>
          </Route>
        </Route>
      )}
    </Routes>
  );
};

export default AppRoutes;
