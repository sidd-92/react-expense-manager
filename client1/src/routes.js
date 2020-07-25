import React from "react";
export const linkHome = "/home";
export const linkExpenses = "/expenses";
export const linkBase = "/";
const Home = React.lazy(() => import("./components/views/Home"));
const Expenses = React.lazy(() => import("./components/views/Expenses"));
const Welcome = React.lazy(() => import("./components/views/Welcome"));

const routes = [
  {
    path: linkBase,
    exact: true,
    name: "Welcome",
    component: Welcome,
  },
  {
    path: linkHome,
    exact: true,
    name: "Home",
    component: Home,
  },
  {
    path: linkExpenses,
    exact: true,
    name: "Expenses",
    component: Expenses,
  },
];
export default routes;
/* import React from "react";

//links
export const linkLogin = "/";
export const linkSignup = "/signup";
export const linkForgotPassword = "/forgotpassword";
export const linkPageDummy = "/menu1/dummy";
export const linkPageFinalStepsEmail = "/finalstepsemail";
export const linkPageFinalStepsPhone = "/finalstepsphone";
export const linkPageResetPassword = "/resetpwd";
export const linkPagePreMeeting = "/premeeting";
export const linkPageExpiredEmail = "/expiredlinkemail";
export const linkPageJoinMeeting = "/joinmeeting";
export const linkPageMeetingDetails = "/meetingdetails";
export const linkPageForgotPasswordExpired = "/forgotpwdexpired";
//authenticated links
export const linkPageDashboard = "/dash/dashboard";
export const linkPageSetupMeeting = "/dash/setupmeeting";
export const linkPageProfile = "/dash/profile";
//linknames
export const linkNameSignup = "Sign Up";
export const linkNameForgotPassword = "Forgot Password";
export const linkNamePageDummy = "Menu 1 Dummy";
export const linkNamePageFinalStepsEmail = "Final Steps Email";
export const linkNamePageFinalStepsPhone = "Final Steps Phone";
export const linkNamePageDashboard = "Dashboard";
export const linkNamePageResetPassword = "Reset Password";
export const linkNamePagePreMeeting = "Pre Meeting";
export const linkNamePageSetupMeeting = "Setup Meeting";
export const linkNamePageProfile = "Profile";
export const linkNamePageForgotPasswordExpired = "Forgot Password Expired";
export const linkNamePageExpiredEmail = "Expired Email Link";
export const linkNamePageJoinMeeting = "Join Meeting";
export const linkNamePageMeetingDetails = "Meeting Details";

//imports
const View1 = React.lazy(() => import("./components/views/View1"));
const View2 = React.lazy(() => import("./components/views/View2"));
const PageDummy = React.lazy(() => import("./components/views/PageDummy"));
const PageDashboard = React.lazy(() =>
  import("./components/views/PageDashboard")
);
const PageSetupMeeting = React.lazy(() =>
  import("./components/views/PageSetUpMeeting")
);
const PageMeetingDetails = React.lazy(() =>
  import("./components/views/PageMeetingDetails")
);
const PageProfile = React.lazy(() => import("./components/views/PageProfile"));
const routes = [
  {
    path: linkPageDummy,
    exact: true,
    name: linkNamePageDummy,
    component: PageDummy,
  },
  {
    path: linkPageDashboard,
    exact: true,
    name: linkNamePageDashboard,
    component: PageDashboard,
  },
  {
    path: linkPageSetupMeeting,
    exact: true,
    name: linkNamePageSetupMeeting,
    component: PageSetupMeeting,
  },
  {
    path: linkPageProfile,
    exact: true,
    name: linkNamePageProfile,
    component: PageProfile,
  },
  {
    path: linkPageMeetingDetails,
    exact: true,
    name: linkNamePageMeetingDetails,
    component: PageMeetingDetails,
  },
];

export default routes;
 */
