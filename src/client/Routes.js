import React from 'react';
// import { Route } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import UserListPage from './pages/UserListPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/AdminsListPage';

// Need to use react-router-config for server-side rendering
export default [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...AdminsListPage,
                path: '/admins'
            },
            {
                ...UserListPage,
                path: '/users'
            },
            {
                ...NotFoundPage
            }
        ]
    }
]

//<!-- This approach doesn't work -->
// export default () => {
//     return (
//         <div>
//             <Route exact path="/" component={Home} />
//             <Route path="/users" component={UserList} />
//         </div>
//     )
// }