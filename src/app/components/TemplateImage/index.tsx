'use client';
import React from 'react';
import Image from 'next/image';
import { theme } from 'antd';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

type ImageItem = {
  link: string;
  className: string;
};

// export interface ColumnsType<RecordType> {
//   key: string;
//   render: (record: RecordType) => React.ReactNode;
// }

export interface RecordType {
  spanCol?: number;
  spanRow?: number;
  width?: React.CSSProperties['width'];
  height?: React.CSSProperties['height'];
  data: string | StaticImport;
}

export interface ImagesProps {
  data: RecordType[];
  cols: number;
  rows: number;
}

function Index(props: ImagesProps) {
  const { data, cols, rows } = props;
  if (!data) return null;
  const LIMIT_IMAGE = 7;
  const imagesLimit = data.slice(0, LIMIT_IMAGE);
  console.log('imagesLimit', imagesLimit);

  const colRowGrid = `grid-cols-${cols} grid-rows-${rows}`;
  const colRowSpan = (col: RecordType['spanCol'], row: RecordType['spanCol']) =>
    col && row ? `row-span-${row} col-span-${col}` : '';
  const wrapImageStyle = (item: RecordType): React.CSSProperties => ({
    width: item.width || '100%',
    height: item.height || '100%',
    position: 'relative',
  });

  return (
    <div
      className={`grid gap-2`}
      style={{
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
      }}
    >
      {imagesLimit.map((item, index) => (
        <div
          key={index}
          style={{
            backgroundColor: '#f0f0f0',
            borderRadius: 12,
            overflow: 'hidden',
            gridRow: `span ${item.spanRow} / span ${item.spanRow}`,
            gridColumn: `span ${item.spanCol} / span ${item.spanCol} `,
          }}
        >
          <div style={wrapImageStyle(item)}>
            <Image
              src={item.data}
              alt="My Image"
              layout="fill"
              objectFit="cover"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Index;
