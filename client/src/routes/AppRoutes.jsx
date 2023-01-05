import { lazy } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { MainLayout } from '../layouts/main';
import { PresentationLayout } from '../layouts/presentation';

import LandingPage from '../pages/LandingPage';

const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const DashboardPage = lazy(() => import('../pages/DashboardPage'));
const SurveyEditPage = lazy(() => import('../pages/SurveyEditPage'));
const SurveyDeletePage = lazy(() => import('../pages/SurveyDeletePage'));
const SurveyCreatePage = lazy(() => import('../pages/SurveyCreatePage'));
const SurveyResultsPage = lazy(() => import('../pages/SurveyResultsPage'));
const SurveySheetPage = lazy(() => import('../pages/SurveySheetPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

const AppRoutes = () => {
  const isAuthenticated = useSelector((state) => state.authentication.isAuthenticated);

  return (
    <Routes>
      {/* Common Routes */}
      <Route element={<PresentationLayout />}>
        <Route path="surveys">
          <Route index element={<Navigate to="/not-found" replace />} />
          <Route path=":surveyId">
            <Route index element={<Navigate to="form" replace />} />
            <Route path="form" element={<SurveySheetPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      {/* Protected Routes */}
      {isAuthenticated && (
        <>
          <Route element={<MainLayout />}>
            <Route index element={<DashboardPage />} />
          </Route>
          <Route element={<PresentationLayout />}>
            <Route path="surveys">
              <Route path="create" element={<SurveyCreatePage />} />
              <Route path=":surveyId">
                <Route path="edit" element={<SurveyEditPage />} />
                <Route path="delete" element={<SurveyDeletePage />} />
                <Route path="results" element={<SurveyResultsPage />} />
              </Route>
            </Route>
          </Route>
        </>
      )}

      {/* Public Routes */}
      {!isAuthenticated && (
        <>
          <Route element={<PresentationLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="auth">
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
            </Route>
          </Route>
        </>
      )}
    </Routes>
  );
};

export default AppRoutes;
