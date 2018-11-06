import React from 'react';
import { connect } from 'react-redux';
import selectArticals from '../selectors/artical';

export const ArticalList = props => (
  <div>
    {
      props.articals.length === 0 ? (
        <div className="list-item list-item__message">
          <p>No Articles</p>
        </div>
      ) : (props.articals.map(artical => (
        <div key={artical.id}>
          <p>{artical.title}</p>
          <p>{artical.summary}</p>
          <p>{artical.createdAt}</p>
          <p>{artical.id}</p>
          <p>{artical.totalReaders}</p>
        </div>
      )))
    }
  </div>
);

const mapStateToProps = state => ({
  articals: selectArticals(state.articals, state.filters),
});

export default connect(mapStateToProps)(ArticalList);
