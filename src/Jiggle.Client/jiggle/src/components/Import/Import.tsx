import * as React from 'react';
import './Import.css';

const Import = ({}) => (

  <section className="Import">
    <h1>Import Assets</h1>
    <p>
      Upload / Import your asset like images into a new or existing album. You can also add tags (keywords) so you
      easiliy find it later on.
    </p>
    <form>
      <label htmlFor="newalbumname">New album name:</label>
      <input id="newalbumname" type="text" placeholder="Name of the new album" />
    </form>
  </section>
);

export default Import;