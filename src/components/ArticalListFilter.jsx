import React from 'react';
import { connect } from 'react-redux';
import { Radio, Row, Col } from 'antd';
import { sortByDate, sortByReaders } from '../actions/filters';

class ArticalListFilter extends React.Component {
  render() {
    return (
      <div className="artical-list-filter-container ant-col-24">
        <Row type="flex" justify="center">
          <Col>
            <Radio.Group
              defaultValue="date"
              buttonStyle="solid"
              className="filter-selctor"
              onChange={(e) => {
                if (e.target.value === 'date') {
                  this.props.dispatch(sortByDate());
                } else if (e.target.value === 'readers') {
                  this.props.dispatch(sortByReaders());
                }
              }}
            >
              <Radio.Button value="date">Sort By Date</Radio.Button>
              <Radio.Button value="readers">Sort By Readers</Radio.Button>
            </Radio.Group>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters,
});

export default connect(mapStateToProps)(ArticalListFilter);
