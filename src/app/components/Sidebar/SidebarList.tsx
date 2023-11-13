import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import { Anchor } from '@/app/components/Sidebar';

export interface Props {
  anchor: Anchor;
  toggleDrawer: (anchor: Anchor, open: boolean) => (event: KeyboardEvent | MouseEvent) => void;
  listItems: SideBarListItem[]
}

export enum SideBarListItemPosition {
  Top = 'top',
  Bottom = 'bottom'
}

export type SideBarListItem = {
  icon : any;
  text : string;
  position: SideBarListItemPosition;
  order: number
  link: string;
}

const SidebarList = ({anchor, toggleDrawer, listItems}: Props) => (
  //@ts-ignore
  <Box
    sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
    role="presentation"
    onClick={toggleDrawer(anchor, false)}
    onKeyDown={toggleDrawer(anchor, false)}
  >
    <List>
      {listItems?.sort((a,b)=> a.order - b.order)?.map(({icon, text}, index) => (
        <ListItem key={`${index}-${text}`} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {icon}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
);

export default SidebarList;