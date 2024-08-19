
import React from 'react';
import { TableData } from '../types/table';

interface TableComponentProps {
    data: TableData[];
}

const TableComponent: React.FC<TableComponentProps> = ({ data }) => {
    return (
        <div className="flex justify-center ">
            <table className="w-full bg-white border border-gray-300">
                <thead>
                    <tr className="flex w-full bg-gray-100 text-gray-600 uppercase text-sm">
                        <th className=" py-2 px-4 border-b">market</th>
                        <th className="  py-2 px-4 border-b">avg</th>
                        <th className="py-2 px-4 border-b">current</th>
                        <th className="py-2 px-4 border-b">value</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-50">
                            <td className="  py-2 px-4 border-b">{item.name}</td>
                            <td className=" py-2 px-4 border-b">{item.price}</td>
                            <td className="py-2 px-4 border-b">{item.price}</td>
                            <td className="py-2 px-4 border-b">{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableComponent;
