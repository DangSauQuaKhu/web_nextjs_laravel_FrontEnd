import { Table } from "antd";

const TaskTable = ({ dataSource }) => {
    const columns = [{
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
    ];

    return <Table dataSource = { dataSource }
    columns = { columns }
    />;
}

export default TaskTable;