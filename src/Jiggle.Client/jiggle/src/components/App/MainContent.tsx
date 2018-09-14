import * as React from 'react';
import { Import } from '../../pages/Import';
import { Albums } from '../../pages/Albums/Albums';
import Faces from '../../pages/Faces/Faces';
import Locations from '../../pages/Locations/Locations';
import Tags from '../../pages/Tags/Tags';
import { Route } from 'react-router';
import { Home } from '../../pages/Home/Home';

export const MainContent = () => (
    <div>
        <Route path="/import" component={Import} />
        <Route path="/albums" component={Albums} />
        <Route path="/faces" component={Faces} />
        <Route path="/locations" component={Locations} />
        <Route path="/tags" component={Tags} />
        <Route exact={true} path="/" component={Home} />
    </div>
);