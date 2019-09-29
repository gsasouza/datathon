import * as React from 'react';

export default [
  {
    label: 'Visão Geral',
    component: React.lazy(() => import('./OverView'))
  },
  {
    label: 'Solicitações de Viagens',
    component: React.lazy(() => import('../travels/requests/RequestList'))
  },
  {
    label: 'Viagens em Andamento',
    component: React.lazy(() => import('../travels/inProgress/InProgressList'))
  },
  {
    label: 'Histórico de Viagens',
    component: React.lazy(() => import('../travels/finished/FinishedList'))
  }
]
