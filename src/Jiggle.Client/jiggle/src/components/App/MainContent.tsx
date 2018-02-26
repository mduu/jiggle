import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import * as AppStore from '../../redux/AppStore';
import Import from '../Import/Import';

export interface MainContentProps {
    selectedMainMenuItem: string;
}
  
const MainContent = (props: MainContentProps) => {
    switch (props.selectedMainMenuItem) {
      case 'import':
          return <Import />;
      default:
          return (
            <section>
              <h1 className="App-title">Welcome to Jiggle</h1>
              <p>
                Later on here will be an activtiy stream of Jiggle.
              </p>
            </section>
          );
    }
  };

export function mapStateToProps({ selectedMainMenuItem }: AppStore.AppStoreState) {
    return {
        selectedMainMenuItem
    };
}
  
export function mapDispatchToProps(dispatch: Dispatch<AppStore.MainMenuAction>) {
    return {  };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(MainContent);