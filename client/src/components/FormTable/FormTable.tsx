import { ServerURL } from "../../helpers/Constants";
import type { UrlData } from "../../interface/UrlData";
import { Link } from "react-router-dom";
import { Copy } from "lucide-react";
import axios from "axios";

interface TableDataProps {
  data: UrlData[];
  updateReloadState: () => void;
}
const FormTable: React.FunctionComponent<TableDataProps> = (props) => {
  const { data,updateReloadState } = props;
  console.log("data in data table is : ", data);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("copied to clipboard");
    } catch (error) {
      console.error("Failed to copy", error);
    }
  };

  const deleteUrl = async (id: string) => {
    try {
      const response = await axios.delete(`${ServerURL}/deleteUrl/${id}`);
      console.log(response);
      updateReloadState();
    } catch (error) {
      console.log("Delete Failed : ", error);
    }
  };

  const tableRenderedData = () => {
    return data.map((item) => {
      return (
        <tr
          key={item._id}
          className="border-b text-white bg-gray-600 hover:bg-white hover:text-gray-700 "
        >
          <td className="px-6 py-3 break-words">
            <Link to={item.fullUrl} target="_blank" rel="noreferer noopener ">
              {item.fullUrl}
            </Link>
          </td>

          <td className="px-6 py-3 ">
            <Link
              to={`${ServerURL}/getShortUrl/${item.shortUrl}`}
              target="_blank"
              rel="noreferer noopener "
            >
              {item.shortUrl}
            </Link>
          </td>
          <td className="px-6 py-3 ">{item.clicks.toString()}</td>
          <td className="px-6 py-3">
            {/* copy button for the url */}
            <button
              className="p-2 rounded hover:bg-gray-200"
              onClick={() => {
                copyToClipboard(`${ServerURL}/getShortUrl/${item.shortUrl}`);
              }}
            >
              <Copy className="text-green-400" size={16} />
            </button>

            {/* delete button for the url */}
            <button
              className="p-2 rounded hover:bg-gray-200 "
              onClick={() => deleteUrl(item._id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-4 text-red-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="container mx-auto pt-2 pb-10">
      <div className="relative overflow-x-auto shadow-sm sm:rounded-lg">
        <table className="w-full table-fixed text-sm text-left rtl:text-right text-gray-700">
          <thead className="bg-gray-600 text-gray-50 text-md font-semibold uppercase py-4">
            <tr>
              <th scope="col" className="px-6 py-3 w-6/12">
                {" "}
                Full URL
              </th>
              <th scope="col" className="px-6 py-3 w-3/12">
                {" "}
                Short URL
              </th>
              <th scope="col" className="px-6 py-3">
                {" "}
                Clicks
              </th>
              <th scope="col" className="px-6 py-3">
                {" "}
                Action
              </th>
            </tr>
          </thead>

          <tbody>{tableRenderedData()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default FormTable;
