import React, { FC } from 'react';

import { DriversData, TracksData } from '../App';

interface TableProps {
  title: string;
  tableData: DriversData[] | TracksData[];
  headingColumns: string[];
  breakOn?: string;
}

const Table: FC<TableProps> = ({ title, tableData, headingColumns, breakOn = 'medium' }) => {
  let tableClass = 'table-container__table';

  if (breakOn === 'small') {
    tableClass += ' table-container__table--break-sm';
  } else if (breakOn === 'medium') {
    tableClass += ' table-container__table--break-md';
  } else if (breakOn === 'large') {
    tableClass += ' table-container__table--break-lg';
  }

  const data = (tableData as Array<DriversData | TracksData>).map((row, index) => {
    let rowData: { key: string; val: string | number; }[] = [];

    Object.entries(row).forEach((data, i) => {
      rowData.push({
        key: headingColumns[i],
        val: data[1]
      });
    });

    return <tr key={index}>
      {rowData.map((data, index) => <td key={index} data-heading={data.key}>{data.val}</td>)}
    </tr>
  });

  return (
    <div className="table-container">
      <div className="table-container__title">
        <h2>{title}</h2>
      </div>
      <table className={tableClass}>
        <thead>
          <tr>
            {headingColumns.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data}
        </tbody>
      </table>
    </div>
  );
}

export default Table;