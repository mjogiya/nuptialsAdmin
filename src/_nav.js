import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilPeople,
  cilWc
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    
  },
  {
    component: CNavTitle,
    name: 'User Info',
  },
  {
    component: CNavItem,
    name: 'Users',
    to: '/users',
    icon: <CIcon icom={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Pending Requests',
    to: '/users/pending',
    icon: <CIcon icom={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Approved Requests',
    to: '/users/approved',
    icon: <CIcon icom={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Rejected Requests',
    to: '/users/rejected',
    icon: <CIcon icom={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Success Stories',
    to: '/users/sucstories',
    icon: <CIcon icom={cilWc} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Admin',
  },
  
  {
    component: CNavItem,
    name: 'Feedbacks',
    to: '/admin/feedbacks',
    icon: <CIcon icom={cilDrop} customClassName="nav-icon" />,
  },

  //need to change below things
  
]

export default _nav
