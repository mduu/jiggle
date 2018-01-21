import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { IUploadInitialData } from 'IUploadInitialData';

// At runtime, Redux will merge together...
type UploadProps =
    IUploadInitialData
    RouteComponentProps<{}>; // ... plus incoming routing parameters

class UploadPage extends React.Component<UploadProps, {}> {
    componentWillMount() {
        // This method runs when the component is first added to the page

        let data = 
        let fetchTask = fetch(`api/Upload/InitialData`)
            .then(response => return response.json());
        // TODO
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
