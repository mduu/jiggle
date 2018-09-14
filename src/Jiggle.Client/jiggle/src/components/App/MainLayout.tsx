import * as React from 'react';
import { Route } from 'react-router';
import {
    AppBar,
    CircularProgress,
    createStyles,
    Drawer,
    Theme,
    Toolbar,
    Typography, withStyles, WithStyles
} from '@material-ui/core';
import { MainContent } from './MainContent';
import { Menu } from './Menu';
import { IError } from '../../core';
import { ErrorMessage } from '../../elements';

const drawerWidth = 240;
const styles = (theme: Theme) => createStyles({
    root: {
        flexGrow: 1,
        height: 440,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0, // So the Typography noWrap works
    },
    toolbar: theme.mixins.toolbar,
});

export interface IOwnProps extends WithStyles<typeof styles> {
    selectedMainMenuItem?: string;
    isFetching: boolean;
    isLoaded: boolean;
    errors?: IError[];
}

type TProps = IOwnProps;

export const MainLayout = withStyles(styles)(
    class extends React.Component<TProps> {

        render() {
            const {isFetching, isLoaded, errors, classes} = this.props;

            return (
                <div className={classes.root}>
                    <AppBar position="absolute" className={classes.appBar}>
                        <Toolbar>
                            <Typography variant="title" color="inherit" noWrap={true}>
                                Jiggle
                            </Typography>
                        </Toolbar>
                    </AppBar>

                    <Drawer
                        variant="permanent"
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <div className={classes.toolbar} />
                        <Menu/>
                    </Drawer>

                    <main className={classes.content}>
                        <div className={classes.toolbar} />
                        {isFetching && <CircularProgress/>}
                        {errors && errors.length > 0 && errors.map((e, i) => <ErrorMessage key={i} error={e}/>)}
                        <Route path="*">
                            {isLoaded && <MainContent/>}
                        </Route>
                    </main>
                </div>
            );
        }
    }
);
