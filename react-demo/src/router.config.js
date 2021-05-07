// import React from 'react';
import Home from '@/pages/Home'
import ProviderDemo from '@/pages/ProviderDemo'
import HooksDemo from '@/pages/HooksDemo'
import ReduxDemo from '@/pages/ReduxDemo'
import SetStateDemo from '@/pages/SetStateDemo'
import LifecycleDemo from '@/pages/LifecycleDemo'

export default [
  {
    name: '主页',
    path: '/',
    component: Home
  },
  {
    name: 'provider-Demo',
    path: '/provider',
    component: ProviderDemo
  },
  {
    name: 'hooks-Demo',
    path: '/hooks',
    component: HooksDemo
  },
  {
    name: 'redux-demo',
    path: '/redux',
    component: ReduxDemo
  },
  {
    name:'setState-demo',
    path: '/setstate',
    component: SetStateDemo
  },
  {
    name: 'lifecycle-demo',
    path: '/lifecycle',
    component: LifecycleDemo
  }
]