import { Button, Popconfirm, Table } from 'antd';

import PropTypes from 'prop-types';
import React from 'react';

const UserList = ({list, total, onEdit, onDelete}) => {

    const columns = [{
        title: 'Name',
        dataIndex: 'name',
    }, {
        title: 'Email',
        dataIndex:'email'
    }, {
        title: 'Website',
        dataIndex: 'Website'
    }, {
        title: 'Operation',
        render: (text, record) => (
            <div>
                <Popconfirm title="Edit?" onConfirm={() => onEdit(record.id)}>
                    <Button>Edit</Button>
                </Popconfirm>
                <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
                    <Button>Delete</Button>
                </Popconfirm>
            </div>
        )
        
    }];


    return (
        <Table 
            dataSource={list}
            columns={columns}
            pagination={total}
         />
    )
}

UserList.propTypes = {
    list: PropTypes.array.isRequired,
    total: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
};

export default UserList;