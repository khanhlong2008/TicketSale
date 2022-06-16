//Admin Pages
import Dashboard from "../pages/CMS/Dashboard";
import Login from "../pages/Home/Login";
import ResetPassword from "../pages/Home/ResetPassword";
import ResetNewPassword from "../pages/Home/ResetNewPassword";

import Page404 from "../components/Page404";

// Services managers
import ServiceManager from "../pages/CMS/ServiceManager";
import AddService from "../pages/CMS/ServiceManager/AddService";
import UpdateService from "../pages/CMS/ServiceManager/UpdateService";
import DetailService from "../pages/CMS/ServiceManager/DetailService";
//Devices managers
import DeviceManager from "../pages/CMS/DeviceManagement";
import AddDevice from "../pages/CMS/DeviceManagement/AddDevice";
import DetailDevice from "../pages/CMS/DeviceManagement/DetailDevice";
import UpdateDevice from "../pages/CMS/DeviceManagement/UpdateDevice";
//Progression managers
import ProgressManager from "../pages/CMS/ProgressionManager";
import AddProgression from "../pages/CMS/ProgressionManager/AddProgression";
import DetailProgression from "../pages/CMS/ProgressionManager/DetailProgression";
// Profile
import Profile from "../pages/CMS/Profile";
// Reports managers
import ReportManager from "../pages/CMS/ReportManagement";
// Ole Managers
import OleManager from "../pages/CMS/OleManagement";
import AddOle from "../pages/CMS/OleManagement/AddOle";
import UpdateOle from "../pages/CMS/OleManagement/UpdateOle";
// User Managers
import UserManager from "../pages/CMS/UserManagement";
import AddUser from "../pages/CMS/UserManagement/AddUser";
import UpdateUser from "../pages/CMS/UserManagement/UpdateUser";
// User log Managers
import UserLog from "../pages/CMS/UserLog";
// UnderGraves

// Private routes
export const privatesRoute = [
  { path: "/dashboard", component: Dashboard },
  { path: "/dashboard/profile", component: Profile },
  { path: "/devices-ticket", component: DeviceManager },
  { path: "/devices-management/add", component: AddDevice },
  { path: "/devices-management/detail/:id", component: DetailDevice },
  { path: "/devices-management/update/:id", component: UpdateDevice },
  { path: "/services-management", component: ServiceManager },
  { path: "/services-management/add", component: AddService },
  { path: "/services-management/update/:id", component: UpdateService },
  { path: "/services-management/detail/:id", component: DetailService },
  { path: "/reports-management", component: ReportManager },
  { path: "/progression-management", component: ProgressManager },
  { path: "/progression-management/add", component: AddProgression },
  { path: "/progression-management/detail/:id", component: DetailProgression },
  { path: "/ole-management", component: OleManager },
  { path: "/ole-management/add", component: AddOle },
  { path: "/ole-management/update/:id", component: UpdateOle },
  { path: "/user-management", component: UserManager },
  { path: "/user-management/add", component: AddUser },
  { path: "/user-management/update/:id", component: UpdateUser },
  { path: "/user-log", component: UserLog },
];

export const publicRoutes = [
  { path: "/", component: Login },
  { path: "/login", component: Login },
  { path: "/resetpass", component: ResetPassword },
  { path: "/newpass", component: ResetNewPassword },
  { path: "*", component: Page404 },
];
