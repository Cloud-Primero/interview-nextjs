// "use client";

import { useState, useEffect, ReactNode } from 'react';
import { defaultItems, TableRowType } from './constants';



function Row(item: TableRowType, index: number, handleEdit: Function, handleRemove: Function): ReactNode {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="w-4 p-4">
            <div className="flex items-center">
                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
            </div>
        </td>
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {item.name}
        </th>
        <td className="px-6 py-4">
            {item.color}
        </td>
        <td className="px-6 py-4">
            {item.category}
        </td>
        <td className="px-6 py-4">
            {item.accesories}
        </td>
        <td className="px-6 py-4">
            {item.availabe ? "Yes" : "No"}
        </td>
        <td className="px-6 py-4">
            {item.price}
        </td>
        <td className="px-6 py-4">
            {item.weight}
        </td>
        <td className="flex items-center px-6 py-4 space-x-3">
            <a href="#" onClick={() => handleEdit(index, {...item})} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            <a href="#" onClick={() => handleRemove(index)} className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
        </td>
    </tr>
    )
}


function Rows(items: TableRowType[], handleEdit: Function, handleRemove: Function): ReactNode {

    if (!Array.isArray(items)) {
        return null;
    }

    return (
        <>
            {
                items.map((item, index) => (
                    Row(item, index, handleEdit, handleRemove)
                  ))
            }
        </>
    );
}

export default function Table() {
    const [items, setItems] = useState<TableRowType[]>([]);

    useEffect(() => {
        setItems(defaultItems);
    }, [items]);


    const handleRemove = (indexToRemove: number) => {
        const newItems = items.filter((_, index) => index !== indexToRemove);
        setItems(newItems);
    };

    const handleEdit = (indexToEdit: number, newItem: TableRowType) => {
        const newItems = [...items];
        newItems[indexToEdit] = newItem;
        setItems(newItems);
    };

    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Color
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Accesories
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Available
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Weight
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {Rows(items, handleEdit, handleRemove)}
                    </tbody>
                </table>
            </div>
        </>
        )
}