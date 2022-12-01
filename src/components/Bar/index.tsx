import React, {CSSProperties, useEffect, useRef} from "react";
import * as echarts from "echarts";

interface BarOption {
    title: string,
    xData: string[],
    yData: number[],
    style?: CSSProperties | undefined
}

const Bar = ({title, xData, yData, style}: BarOption) => {
    const domRef: any = useRef();

    const chartInit = () => {
        // 基于准备好的dom，初始化echarts实例
        const myChart = echarts.init(domRef.current);
        // 绘制图表
        myChart.setOption({
            title: {
                text: title
            },
            tooltip: {},
            xAxis: {
                data: xData
            },
            yAxis: {},
            series: [
                {
                    name: '销量',
                    type: 'bar',
                    data: yData
                }
            ]
        });
    };

    useEffect(() => {
        chartInit();
    }, []);

    return (
        <div ref={domRef}
             style={style}></div>
    );
};

export default Bar;