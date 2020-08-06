import { adminRoot } from './defaultValues';

const data = [
  {
    id: 'gogo',
    icon: 'iconsminds-air-balloon-1',
    label: 'menu.gogo',
    to: `${adminRoot}/gogo`,
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.start',
        to: `${adminRoot}/gogo/start`,
      },
    ],
  },
  {
    id: 'secondmenu',
    icon: 'iconsminds-three-arrow-fork',
    label: 'menu.second-menu',
    to: `${adminRoot}/second-menu`,
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.second',
        to: `${adminRoot}/second-menu/second`,
      },
    ],
  },
  {
    id: 'blankpage',
    icon: 'iconsminds-bucket',
    label: 'menu.blank-page',
    to: `${adminRoot}/blank-page`,
  },
];
export default data;
