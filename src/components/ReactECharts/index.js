import echarts from 'echarts';
import React from 'react';
import 'echarts/theme/macarons';

import elementResizeEvent from 'element-resize-event';

class ReactEcharts extends React.Component {
    propTypes: {
        option: React.PropTypes.object.isRequired,
        notMerge: React.PropTypes.bool,
        lazyUpdate: React.PropTypes.bool,
        style: React.PropTypes.object,
        className: React.PropTypes.string,
        theme: React.PropTypes.string,
        onChartReady: React.PropTypes.func,
        showLoading: React.PropTypes.bool,
        loadingOption: React.PropTypes.object,
        onEvents: React.PropTypes.object
    }

    // first add
    componentDidMount() {
        let echartObj = this.renderEchartDom();
        let onEvents = this.props.onEvents || {};
        let reizeEvent;

        this.bindEvents(echartObj, onEvents);
        // on chart ready
        if (typeof this.props.onChartReady === 'function') this.props.onChartReady(echartObj);

        function resize() {
            clearTimeout(reizeEvent);
            reizeEvent = setTimeout(function(){ echartObj.resize(); }, 200);
        }

        // on resize
        elementResizeEvent(this.refs.echartsDom, function() {
            resize()
        });
    }

    // update
    componentDidUpdate() {
        this.renderEchartDom();
        this.bindEvents(this.getEchartsInstance(), this.props.onEvents || []);
    }

    // remove
    componentWillUnmount() {
        echarts.dispose(this.refs.echartsDom)
    }

    //bind the events
    bindEvents(instance, events) {
        var _loop = function _loop(eventName) {
            // ignore the event config which not satisfy
            if (typeof eventName === 'string' && typeof events[eventName] === 'function') {
                // binding event
                instance.off(eventName);
                instance.on(eventName, function(param) {
                    events[eventName](param, instance);
                });
            }
        };

        for (var eventName in events) {
            _loop(eventName);
        }

    }

    // render the dom
    renderEchartDom() {
        // init the echart object
        let echartObj = this.getEchartsInstance();
        // set the echart option
        echartObj.setOption(this.props.option, this.props.notMerge || false, this.props.lazyUpdate || false);
        // set loading mask
        if (this.props.showLoading) echartObj.showLoading(this.props.loadingOption || null);
        else echartObj.hideLoading();

        return echartObj;
    }

    getEchartsInstance() {
        // return the echart object
        let theme = this.props.theme? this.props.theme : 'macarons';
        return echarts.getInstanceByDom(this.refs.echartsDom) || echarts.init(this.refs.echartsDom, theme);
    }

    render() {
        let style = this.props.style || {
            height: '350px'
        };
        // for render
        return (
            <div ref='echartsDom'
                className={this.props.className}
                style={style} />
        );
    }
};

module.exports = ReactEcharts;