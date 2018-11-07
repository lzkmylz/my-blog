import React from 'react';
import { connect } from 'react-redux';
import { DatePicker, Radio } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

class ArticalListFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autoFocus: true,
    };
  }

  render() {
    return (
      <div className="artical-list-filter-container ant-col-24">
        <Radio.Group defaultValue="a" buttonStyle="solid">
          <Radio.Button value="a">Sort By Date</Radio.Button>
          <Radio.Button value="a">Sort By Readers</Radio.Button>
        </Radio.Group>
        <RangePicker
          autoFocus={this.state.autoFocus}
          disabledDate={(current) => {
            const max = moment().endOf('day');
            if (current > max) {
              return true;
            }
            return false;
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters,
});

export default connect(mapStateToProps)(ArticalListFilter);
