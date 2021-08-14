import React, {useMemo,useState, useEffect} from 'react';
import {useTable} from 'react-table'
//import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import './table.css'
const axios = require('axios').default;

export const BasicTable = () => {
    const columns = useMemo(() => COLUMNS,[] )
    //const data = useMemo(() => MOCK_DATA,[] )
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
          const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
          setData(result.data);
        })();
    }, []);    

    const{
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow,

    } = useTable({
        columns,
        data
    })

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                          { headerGroup.headers.map((column) => (
                                  <th {...column.getHeaderProps()}> {column.render('Header')}
                                  </th>
                        ))}       
                    </tr>
                ))}             
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row =>{
                        prepareRow(row)
                        return (
                        <tr {...row.getRowProps()}>
                            {
                                row.cells.map((cell) => {
                                   return <td {...cell.getCellProps()}>{cell.render('Cell')}</td> 
                                })
                            }
                        </tr>
                        )
                    })
                }
            </tbody>
            <tfoot> 
                {
                    footerGroups.map( footerGroup =>(
                        <tr {...footerGroup.getFooterGroupProps()}>
                            {
                                footerGroup.headers.map(column => (
                                    <td {...columns.getFooterProps}>
                                        {
                                            column.render('Footer')
                                        }

                                    </td>
                            ))
                        }
                        </tr>
                    ))
                }
            </tfoot>
        </table>
    );
};
