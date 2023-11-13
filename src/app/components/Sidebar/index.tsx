import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Fragment, useState } from 'react';
import SidebarList from '@/app/components/Sidebar/SidebarList';
import Hamburger from '@/app/icons/Hamburger';
import items from '@/app/components/Sidebar/Items';

export type Anchor = 'top' | 'left' | 'bottom' | 'right';

type Props = {
  anchor?: Anchor | Anchor[];
}

const Sidebar = ({anchor = 'left'}: Props) =>{
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: any) => {
      if (
        event.type === 'keydown' &&
        ((event as KeyboardEvent).key === 'Tab' ||
          (event as KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };



  return (
    <div>
      {(Array.isArray(anchor) ? anchor : [anchor]).map((anchor) => (
        <Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><Hamburger/></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <SidebarList anchor={anchor} toggleDrawer={toggleDrawer} listItems={items} />
          </Drawer>
        </Fragment>
      ))}
    </div>
  );
}

export default Sidebar;
