import { Button, Popconfirm, Table } from 'antd';

import PropTypes from 'prop-types';
import React from 'react';
import styles from './UserList.css';

const UserList = ({users, total, onEdit, loading, onDelete}) => {

    const columns = [{
        title: 'Name',
        dataIndex: 'name',
        render: text => <a href=''>{text}</a>
    }, {
        title: 'Email',
        dataIndex:'email'
    }, {
        title: 'Website',
        dataIndex: 'Website'
    }, {
        title: 'Operation',
        render: (text, record) => (
            <span className={styles.operation}>
                <a href=''>Edit</a>
                <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
                    <a href=''>Delete</a>
                </Popconfirm>
            </span>
        )
    }
    ];

    return (
        <Table 
            dataSource={users}
            loading={loading}
            columns={columns}
            total={total}
            pagination={
                { 
                    total,
                    pageSize: 5
                }
            }
         />
    )
}

UserList.propTypes = {
    users: PropTypes.array.isRequired,
    total: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
};

export default UserList;