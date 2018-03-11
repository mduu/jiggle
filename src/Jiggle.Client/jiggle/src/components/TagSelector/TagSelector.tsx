import * as React from 'react';
import Chip from 'material-ui/Chip';
import Paper from 'material-ui/Paper';

type TStyle = {
  tagselectorRoot: string;
  tagselectorChip: string;
};

const styles: TStyle = require('./TagSelector.less');

class TagSelector extends React.Component {
  state = {
    chipData: [
      { key: 0, label: 'Portrait' },
      { key: 1, label: 'Nature' },
      { key: 2, label: 'Diving' },
      { key: 3, label: 'Fish' },
      { key: 4, label: 'Animals' },
    ],
  };

  // tslint:disable-next-line:no-any
  handleDelete = (data: any) => () => {
    if (data.label === 'React') {
      alert('Why would you want to delete React?! :)'); // eslint-disable-line no-alert
      return;
    }

    const chipData = [...this.state.chipData];
    const chipToDelete = chipData.indexOf(data);
    chipData.splice(chipToDelete, 1);
    this.setState({ chipData });
  }

  render() {
    return (
      <Paper className={styles.tagselectorRoot}>
        {this.state.chipData.map(data => {
          return (
            <Chip
              key={data.key}
              label={data.label}
              onDelete={this.handleDelete(data)}
              className={styles.tagselectorChip}
            />
          );
        })}
      </Paper>
    );
  }
}

export default TagSelector;