import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

// At runtime, Redux will merge together...
type UploadProps =
    RouteComponentProps<{}>; // ... plus incoming routing parameters

class UploadPage extends React.Component<UploadProps, {}> {
    componentWillMount() {
        // This method runs when the component is first added to the page

        //let fetchTask = fetch(`api/Upload/InitialData`)
        //    .then(response => response.json() as Promise<Album[]>)
        //    .then(data => {
        //        dispatch({ type: 'RECEIVE_UPLOAD_INITIAL_DATA', existingAlbums: data });
        //    });
    }

    componentWillReceiveProps(nextProps: UploadProps) {
        // This method runs when incoming props (e.g., route params) change
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
            </select>
        </form>
    }
}

export default UploadPage;
