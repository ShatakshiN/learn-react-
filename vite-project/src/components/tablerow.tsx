interface RowData {
  srNo: number;
  item: string;
  price: number;
}

interface Tableprops {
  row: RowData[];
}


function RowContent({row}:Tableprops){
    return (
        <>
            {row.map((items)=>(
                <tr key={items.srNo}>
                    <td className="border border-gray-400 px-4 py-2">{items.srNo}</td>
                    <td className="border border-gray-400 px-4 py-2">{items.item}</td>
                    <td className="border border-gray-400 px-4 py-2">{items.price}</td>
                </tr>
            ))}
        </>

    )
}

export default RowContent;