import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import HouseSidingIcon from "@mui/icons-material/HouseSiding";
import ListItemText from "@mui/material/ListItemText";
import ListIcon from "@mui/icons-material/List";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import * as React from "react";
import {Fragment} from "react";
import Link from "next/link";
import AddIcon from '@mui/icons-material/Add';

export default function Router() {
    return (<Fragment>
        <Divider/>
        <List>
            <Link href="/">
                <ListItem key={'index'} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <HouseSidingIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'index'}/>
                    </ListItemButton>
                </ListItem>
            </Link>

            <Link href={"/sub-account"}>
                <ListItem key={'sub-account'} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'sub-account'}/>
                    </ListItemButton>
                </ListItem>
            </Link>

            <Link href={"/other"}>
                <ListItem key={'other'} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <AddIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'other'}/>
                    </ListItemButton>
                </ListItem>
            </Link>
        </List>
        <Divider/>
        <List>
            <ListItem key={'logout'} disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <InboxIcon/>
                    </ListItemIcon>
                    <ListItemText primary={'logout'}/>
                </ListItemButton>
            </ListItem>
        </List>
    </Fragment>)
}