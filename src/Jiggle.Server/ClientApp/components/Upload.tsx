import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState }  from '../store';
import * as UploadState from '../store/Upload';

// At runtime, Redux will merge together...
type UploadProps =
    UploadState.UploadState        // ... state we've requested from the Redux store
    & typeof UploadState.actionCreators      // ... plus action creators we've requested
    & RouteComponentProps<{}>; // ... plus incoming routing parameters

class Upload extends React.Component<UploadProps, {}> {
    componentWillMount() {
        // This method runs when the component is first added to the page
        //let startDateIndex = parseInt(this.props.match.params.startDateIndex) || 0;
        this.props.requestUploadInitialData();
    }

    componentWillReceiveProps(nextProps: UploadProps) {
        // This method runs when incoming props (e.g., route params) change
        // let startDateIndex = parseInt(nextProps.match.params.startDateIndex) || 0;
        this.props.requestUploadInitialData();
    }

    public render() {
        return <div>
            <h1>Upload assets</h1>
            <p>In this screen one can upload new assets like images and videos.</p>
            { this.renderUploadForm() }
        </div>;
    }

    private renderUploadForm() {
        return <form>
            <label>Existing albums:</label>
            <select>
                {this.props.existingAlbums.map(album =>
                    <option value="{album.id}">{album.name}</option>
                )}
            </select>
        </form>
    }
}

export default connect(
    (state: ApplicationState) => state.upload, // Selects which state properties are merged into the component's props
    UploadState.actionCreators                 // Selects which action creators are merged into the component's props
)(Upload) as typeof Upload;
