import { useState } from 'react';
import Table, { TableColumn } from './Table';
interface TableData {
  id: number;
  name: string;
  age: number;
  gender: string;
}

const data: TableData[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    id: i,
    name: `Edward ${i}`,
    age: i + 1,
    gender: `male. ${i}`,
  });
}

const columns: TableColumn<TableData>[] = [
  { key: 'id', title: 'ID', fixed: 'left', width: 100 },
  { key: 'name', title: 'Name', fixed: 'left', width: 100 },
  { key: 'age', title: 'Age', sortable: true },
  { title: 'Column1', key: 'name' },
  { title: 'Column 2', key: 'name' },
  { title: 'Column 3', key: 'name' },
  { title: 'Column 4', key: 'name' },
  { title: 'Column 5', key: 'name' },
  { title: 'Column 6', key: 'name' },
  { title: 'Column 7', key: 'name' },
  { title: 'Column 8', key: 'name', width: 100 },
  { key: 'gender', title: 'Gender', fixed: 'right', width: 100 },
];

const TABLE_SIZE = ['small', 'middle', 'large'] as const;
type TableSize = (typeof TABLE_SIZE)[number];

function App() {
  const [tableSize, setTableSize] = useState<TableSize>('middle');

  const handleTableSize = (size: TableSize) => {
    setTableSize(size);
  };

  return (
    <div style={{ padding: '0 20px' }}>
      <div style={{ margin: '20px 0' }}>
        {TABLE_SIZE.map(size => (
          <button
            key={size}
            onClick={() => handleTableSize(size)}
            style={{
              border: 'none',
              cursor: 'pointer',
              padding: 8,
              background: tableSize === size ? '#e92' : '#fff',
            }}
          >
            {size}
          </button>
        ))}
      </div>
      <Table
        data={data}
        columns={columns}
        defaultSortColumn="age"
        defaultSortDirection="asc"
        pageSize={10}
        scroll={{ x: 1500, y: 150 }}
        size={tableSize}
      />
    </div>
  );
}

export default App;
