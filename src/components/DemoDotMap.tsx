import React, { useState, useEffect } from 'react';
import { DotMap } from "@ant-design/maps";

const DemoDotMap: React.FC = () => {
    const [list, setData] = useState([]);

    useEffect(() => {
      asyncFetch();
    }, []);

    const asyncFetch = () => {
      fetch('https://gw.alipayobjects.com/os/antfincdn/g5hIthhKlr/quanguoshixianweizhi.json')
        .then((response) => response.json())
        .then(({ list }) => setData(list))
        .catch((error) => {
          console.log('fetch data failed', error);
        });
    };

    // @ts-ignore
  const config = {
      map: {
        type: 'mapbox',
        style: 'dark',
        zoom: 5,
        center: [107.4976, 32.1697],
        pitch: 45,
      },
      source: {
        data: list,
        parser: {
          type: 'json',
          coordinates: 'lnglat',
        },
      },
      color: '#47aff7',
      size: {
        field: 'style',
        // @ts-ignore
        value: ({ style }) => {
          if (style == 0) {
            return 8;
          } else if (style == 1) {
            return 4;
          } else {
            return 2;
          }
        },
      },
      style: {
        opacity: 0.8,
        stroke: '#c3faff',
        strokeWidth: 1,
      },
      state: {
        active: {
          color: '#FFF684',
        },
      },
      zoom: {
        position: 'bottomright',
      },
      tooltip: {
        items: ['name'],
      },
    };

  // @ts-ignore
  return <DotMap {...config} />;
};

export default DemoDotMap;