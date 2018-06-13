import * as React from 'react';
import './Albums.css';
import { getMasterdataState, TAppState } from '../../redux';
import { Tags, IAlbumMetadata } from '../../core';
import { connect } from 'react-redux';

type TOwnProps = {};

type TStateProps = {
  allTags: Tags;
  allAlbums: IAlbumMetadata[];
};

type TDispatchProps = {};

type TProps = TOwnProps & TStateProps & TDispatchProps;

class AlbumsComponent extends React.Component<TProps> {

  render() {
    return (
      <section className="Albums">
        <h1>Albums</h1>
        <p>Under constuction...</p>
      </section>
    );
  }

}

export function mapStateToProps(state: TAppState): TStateProps {
  const masterdata = getMasterdataState(state);

  return {
    allTags: masterdata.tags,
    allAlbums: masterdata.albums,
  };
}

const dispatchProps: TDispatchProps = {
};

// tslint:disable-next-line:max-line-length
export const Albums = connect<TStateProps, TDispatchProps, TOwnProps>(mapStateToProps, dispatchProps)(AlbumsComponent);