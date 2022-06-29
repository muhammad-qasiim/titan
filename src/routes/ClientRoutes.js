import React, { useEffect } from 'react';
import { Route, Switch, useHistory, withRouter } from 'react-router-dom';
import AdminLayout from '../Component/Common/AdminLayout';
import AdminSignIn from '../pages/Admin/Auth/Login';
import CreateEvent from '../pages/Admin/CreateEvent';
import CreateMission from '../pages/Admin/CreateMission';
import Dashboard from '../pages/Admin/Dashboard/Dashboard';
import EventList from '../pages/Admin/EventList';
import MissionList from '../pages/Admin/MissionList';
import isEmpty from '../utils/isEmpty';
import ClientPrivateRoute from './ClientPrivateRoute';

const ClientRoutes = () => {
  const history = useHistory();
  const location = history?.location?.pathname;
  const auth = localStorage.getItem('token');
  useEffect(() => {
    if (!isEmpty(auth) && location === '/admin/signin') {
      history.push('/admin/dashboard')
    }
  }, [])
  return (
    <Switch>
      <AdminLayout>
        <Route path="/admin/signin" component={AdminSignIn} />
        <ClientPrivateRoute path="/admin/dashboard" component={Dashboard} />
        <ClientPrivateRoute path="/admin/create-event" component={CreateEvent} />
        <ClientPrivateRoute path="/admin/events" component={EventList} />
        <ClientPrivateRoute path="/admin/create-mission" component={CreateMission} />
        <ClientPrivateRoute path="/admin/missions" component={MissionList} />
        {/* <Redirect from='/admin' to='/admin/signin' /> */}
      </AdminLayout>
    </Switch>
  )
}

export default withRouter(ClientRoutes);
