// eslint-disable-next-line react/prop-types
const CommonValues = ({ common1, common2, result }) => {
  return (
    <div className="bg-blue-600  w-[370px] lg:w-[500px] mx-auto mt-8 lg:mt-10 rounded-lg overflow-hidden shadow-lg ">
      <table className="table-auto min-w-full ">
        <thead className="bg-gray-200 text-gray-800 lg:text-xl">
          <tr>
            <th className="border px-4 py-2 lg:py-3 w-[180px] lg:w-[50%] ">
              {common1}
            </th>
            <th className="border px-4 py-2 lg:py-3 w-[180px] lg:w-[50%]">
              {common2}
            </th>
          </tr>
        </thead>
        <tbody className="text-center px-4 py-2 text-white  lg:text-xl">
          <tr>
            <td className="border px-4 py-1 lg:p-2"> 1 {common1}</td>
            <td className="border px-4 py-1 lg:p-2">
              {(1 * result).toFixed(2)} {common2}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-1 lg:p-2"> 5 {common1}</td>
            <td className="border px-4 py-1 lg:p-2">
              {(5 * result).toFixed(2)} {common2}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-1 lg:p-2"> 10 {common1}</td>
            <td className="border px-4 py-1 lg:p-2">
              {(10 * result).toFixed(2)} {common2}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-1 lg:p-2"> 25 {common1}</td>
            <td className="border px-4 py-1 lg:p-2">
              {(25 * result).toFixed(2)} {common2}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-1 lg:p-2"> 50 {common1}</td>
            <td className="border px-4 py-1 lg:p-2">
              {(50 * result).toFixed(2)} {common2}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-1 lg:p-2"> 100 {common1}</td>
            <td className="border px-4 py-1 lg:p-2">
              {(100 * result).toFixed(2)} {common2}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-1 lg:p-2"> 500 {common1}</td>
            <td className="border px-4 py-1 lg:p-2">
              {(500 * result).toFixed(2)} {common2}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-1 lg:p-2"> 1000 {common1}</td>
            <td className="border px-4 py-1 lg:p-2">
              {(1000 * result).toFixed(2)} {common2}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-1 lg:p-2"> 5000 {common1}</td>
            <td className="border px-4 py-1 lg:p-2">
              {(5000 * result).toFixed(2)} {common2}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-1 lg:p-2"> 10000 {common1}</td>
            <td className="border px-4 py-1 lg:p-2">
              {(10000 * result).toFixed(2)} {common2}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-1 lg:p-2"> 50000 {common1}</td>
            <td className="border px-4 py-1 lg:p-2">
              {(50000 * result).toFixed(2)} {common2}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CommonValues;
