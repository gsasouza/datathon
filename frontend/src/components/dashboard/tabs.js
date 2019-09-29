import * as React from 'react';

export default [
  {
    label: 'Visão Geral',
    component: React.lazy(() => import('./OverView'))
  },
  {
    label: 'Solicitações',
    component: React.lazy(() => import('../requests/RequestList'))
  }
]
