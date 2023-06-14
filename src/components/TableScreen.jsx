import SubjectPicker from './subjectPicker';
import { getData } from 'API/API';
import { useEffect, useState } from 'react';

const TableScreen = () => {
  const [data, setData] = useState([]);

  useEffect = () => {
    const requestFunc = async () => {
      const response = await getData();
      setData(response);
      requestFunc();
    };
  };
  <>
    <table>
      {data.map(item => {
        <tr>
          <th>item.</th>
        </tr>
      })}

      {
        <tr>
          <td></td>
        </tr>
      }
    </table>
  </>;
};

export default TableScreen;
