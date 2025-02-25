import HomeIcon from '@mui/icons-material/Home';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import ApiIcon from '@mui/icons-material/Api';

export const MenuItems = [
  {
    id: 'menu_home',
    name: 'home',
    label: 'Home',
    path: '/home',
    icon: <HomeIcon />,
  },
  {
    id: 'menu_multi_step_form',
    name: 'multi-step-form',
    label: 'Multi Step Form',
    path: '/multi-step-form',
    icon: <AppRegistrationIcon />,
  },
  {
    id: 'menu_api_call',
    name: 'table-user',
    label: 'Api Call',
    path: '/table-user',
    icon: <ApiIcon />,
  },
];
