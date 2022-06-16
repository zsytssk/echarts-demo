import * as echarts from 'echarts';
import { useEffect, useRef, useState } from 'react';
import { data } from './data';

import styles from './index.module.less';
import { async_label, default_option } from './options';

type Status = 'default' | 'asyncLabel';
export default function Echarts() {
    const ref = useRef<HTMLDivElement>(null);
    const [status, setStatus] = useState<Status>('default');

    useEffect(() => {
        if (!ref.current || !data) {
            return;
        }
        const myChart = echarts.init(ref.current);
        let options: any = default_option;
        if (status === 'asyncLabel') {
            options = async_label;
        }

        myChart.setOption(
            {
                ...options,
                series: [
                    {
                        ...options.series[0],
                        data: [data],
                    },
                ],
            },
            true,
        );
        myChart.on('click', (params) => {
            console.log(`test:>params`, params);
        });
        return () => {
            myChart.clear();
        };
    }, [status]);

    return (
        <div className={styles.treeView}>
            <div className="ctrlBox">
                <button onClick={() => setStatus('default')}>默认</button>
                <button onClick={() => setStatus('asyncLabel')}>
                    异步label
                </button>
            </div>
            <div className="list">
                <div ref={ref} className="item"></div>
            </div>
        </div>
    );
}
