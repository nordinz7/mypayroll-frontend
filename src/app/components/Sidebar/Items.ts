import { SideBarListItem, SideBarListItemPosition } from "@/app/components/Sidebar/SidebarList"
import SettingsIcon from '@mui/icons-material/Settings';

const items:SideBarListItem[] =  [
  {
    icon: SettingsIcon,
    text: 'Settings',
    position: SideBarListItemPosition.Top,
    order: 1,
    link: '/settings'
  }
]

export default items