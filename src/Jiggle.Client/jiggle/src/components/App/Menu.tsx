import * as React from 'react';
import { MenuItem } from './MenuItem';
import { Drawer, List } from '@material-ui/core';

export const Menu = () => (

    <Drawer variant="permanent">
        <List>
            <div>

                <MenuItem
                    text="Home"
                    faIconName="fa-home"
                    routeTo="/"
                />

                <MenuItem
                    text="Import"
                    faIconName="fa-upload"
                    routeTo="/import"
                />

                <MenuItem
                    text="Albums"
                    faIconName="fa-images"
                    routeTo="/albums"
                />

                <MenuItem
                    text="Faces"
                    faIconName="fa-user"
                    routeTo="/faces"
                />

                <MenuItem
                    text="Locations"
                    faIconName="fa-map-marker"
                    routeTo="/locations"
                />

                <MenuItem
                    text="Tags"
                    faIconName="fa-tags"
                    routeTo="/tags"
                />
           </div>
        </List>
    </Drawer>
);
