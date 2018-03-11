import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import * as AppStore from '../../redux/AppStore';
import Import from '../../pages/Import/Import';
import Albums from '../../pages/Albums/Albums';
import Faces from '../../pages/Faces/Faces';
import Locations from '../../pages/Locations/Locations';
import Tags from '../../pages/Tags/Tags';

export type TMainContentProps = {
    selectedMainMenuItem: string;
};
  
const MainContent = (props: TMainContentProps) => {
    switch (props.selectedMainMenuItem) {
      case 'import': return <Import />;
      case 'albums': return <Albums />;
      case 'faces': return <Faces />;
      case 'locations': return <Locations />;
      case 'tags': return <Tags />;
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

export function mapStateToProps({ selectedMainMenuItem }: AppStore.IAppStoreState) {
    return {
        selectedMainMenuItem
    };
}
  
export function mapDispatchToProps(dispatch: Dispatch<AppStore.MainMenuAction>) {
    return {  };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(MainContent);