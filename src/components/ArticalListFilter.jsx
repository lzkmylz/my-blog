import React from 'react';
import { connect } from 'react-redux';
import { Radio, Row, Col } from 'antd';

class ArticalListFilter extends React.Component {
  render() {
    return (
      <div className="artical-list-filter-container ant-col-24">
        <Row type="flex" justify="center">
          <Col>
            <Radio.Group defaultValue="a" buttonStyle="solid" className="filter-selctor">
              <Radio.Button value="a">Sort By Date</Radio.Button>
              <Radio.Button value="b">Sort By Readers</Radio.Button>
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
