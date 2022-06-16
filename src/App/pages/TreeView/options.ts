export const default_option = {
    title: {
        text: 'default',
    },
    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'shadow',
        },
        formatter: '{b}:{c}',
    },
    series: [
        {
            type: 'tree',
            top: '1%',
            left: '7%',
            bottom: '1%',
            right: '20%',
            symbolSize: 40,
            emphasis: {
                focus: 'descendant',
            },
            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750,
        },
    ],
};

export const async_label = {
    ...default_option,
    title: {
        text: 'async label',
    },
    tooltip: {
        ...default_option.tooltip,
        formatter: (
            itemInfo: any,
            ticker: string,
            callback: (ticker: string, content: string) => void,
        ) => {
            const data = itemInfo.data;
            setTimeout(() => {
                callback(ticker, `${data.name}: ${data.value}`);
            }, 1000);
            return `${data.name}: ...`;
        },
    },
};
