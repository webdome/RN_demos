import * as React from 'react';
import * as PropTypes from 'prop-types';
import { View, Easing } from 'react-native';
import { VerticalScrollView } from 'react-native-spring-scrollview';
import style from './assets/style';
import { toJS } from 'mobx';
import RrefreshHeader from './components/RrefreshHeader';
import LoadingFooter from './components/LoadingFooter';

export default class extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    list: false,
    view: false
  };

  // propType
  static propTypes = {
    list: PropTypes.bool, // 表示使用refresh_list
    view: PropTypes.bool, // 表示使用refresh_view
    onRefresh: PropTypes.func, // 下拉刷新的列表
    // 使用list要传入的参数
    renderFooter: PropTypes.func,
    dataSource: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    renderRow: PropTypes.func,
    loadMore: PropTypes.func,
    isLast: PropTypes.bool
  };

  // List视图
  _renderList = () => {
    let {
      props: { dataSource, renderRow, isLast, renderFooter }
    } = this;

    if (!Array.isArray(dataSource)) {
      dataSource = toJS(dataSource);
    }
    // console.log('dataSource:', dataSource);
    return (
      <View>
        {dataSource.map((item, index) => {
          return <View key={index}>{renderRow(item, index)}</View>;
        })}
        {isLast && renderFooter ? renderFooter() : null}
      </View>
    );
  };

  // 刷新
  _onRefresh = async () => {
    const {
      _scrollView,
      props: { onRefresh }
    } = this;
    _scrollView.beginRefresh();
    await onRefresh();
    _scrollView.endRefresh();
    console.log('refresh-end');
  };

  // 加载
  _onLoadMore = async () => {
    const {
      _scrollView,
      props: { loadMore }
    } = this;
    _scrollView.beginLoading();
    await loadMore();
    _scrollView.endLoading();
    console.log('load-end');
  };

  render() {
    const {
      props: { view, list, children },
      _renderList,
      _onRefresh,
      _onLoadMore
    } = this;

    return (
      <View style={style.wrap}>
        <VerticalScrollView
          style={style.wrap}
          ref={ref => (this._scrollView = ref)}
          reboundEasing={Easing.cos}
          refreshHeader={RrefreshHeader}
          loadingFooter={LoadingFooter}
          reboundDuration={300}
          decelerationRateWhenOut={0.9}
          showsVerticalScrollIndicator={true}
          bounces={true}
          scrollEnabled={true}
          inputToolBarHeight={20}
          onRefresh={_onRefresh}
          loadingFooterHeight={80}
          onLoading={list ? _onLoadMore : null}>
          {view ? children : list ? _renderList() : null}
        </VerticalScrollView>
      </View>
    );
  }
}
