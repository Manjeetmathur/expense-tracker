import React from 'react'
import { Dashboard, Income, Transaction, Expense} from './Icon'

export const MenuItems = [
       {
              id : 1,
              title : 'Dashboard',
              icon : <Dashboard/>,
              link : '/dashboard'
       },
       {
              id : 2,
              title : 'View Transaction',
              icon : <Transaction/>,
              link : '/dashboard'
       },
       {
              id : 3,
              title : 'Income',
              icon : <Income/>,
              link : '/dashboard'
       },
       {
              id : 4,
              title : 'Expense',
              icon : <Expense/>,
              link : '/dashboard'
       },
]
