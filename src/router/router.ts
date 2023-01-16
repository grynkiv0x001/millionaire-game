import { lazy } from 'react';

import { ROUTES } from './route-types';

const Start = lazy(() => import('@/pages/').then(({ Start }) => ({ default: Start })));
const Game = lazy(() => import('@/pages/').then(({ Game }) => ({ default: Game })));
const Finish = lazy(() => import('@/pages/').then(({ Finish }) => ({ default: Finish })));

export const router = [
  {
    path: ROUTES.START,
    element: Start
  },
  {
    path: ROUTES.GAME,
    element: Game
  },
  {
    path: ROUTES.FINISH,
    element: Finish
  }
];
