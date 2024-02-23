'use client';

import Image from "next/image";
import React from 'react';
import GaugeChart from "react-gauge-chart";

export default function CurrentMonthOverview() {
  const data = [
    { id: 1, name: 'Item 1', value: 'Value 1', anotherValue: 'Something 1'},
    { id: 2, name: 'Item 2', value: 'Value 2', anotherValue: 'Something 2'},
    { id: 3, name: 'Item 3', value: 'Value 3', anotherValue: 'Something 3'},
    // Add more data as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-row gap-4">
        {/* Table */}
        <div className="flex-1">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Value</th>
                <th className="px-4 py-2">Value</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id}>
                  <td className="border px-4 py-2">{row.id}</td>
                  <td className="border px-4 py-2">{row.name}</td>
                      <td className="border px-4 py-2">{row.value}</td>
                      <td className="border px-4 py-2">{row.anotherValue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Gauge Pods */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          <GaugeChart id="gauge-chart1" nrOfLevels={30} percent={0.3} />
          <GaugeChart id="gauge-chart2" nrOfLevels={30} percent={0.7} />
          <GaugeChart id="gauge-chart3" nrOfLevels={30} percent={0.5} />
          <GaugeChart id="gauge-chart4" nrOfLevels={30} percent={0.85} />
        </div>
      </div>
    </div>
  );
}