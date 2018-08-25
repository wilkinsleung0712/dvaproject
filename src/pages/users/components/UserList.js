import { Pagination, Popconfirm, Table } from 'antd';

import PropTypes from 'prop-types';
import React from 'react';
import UserModal from './UserModal';
import styles from './UserList.css';

const UserList = ({users, total, onEdit, loading, onDelete, onChange, page: current}) => {

    const columns = [{
        title: 'Name',
        dataIndex: 'name',
        render: text => <a href=''>{text}</a>
    }, {
        title: 'Email',
        dataIndex:'email'
    }, {
        title: 'Website',
        dataIndex: 'website'
    }, {
        title: 'Operation',
        render: (text, record) => (
            <span className={styles.operation}>
                <UserModal record={record} title='Edit User'>
                    <a>Edit</a>
                </UserModal>
                <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
                    <a href=''>Delete</a>
                </Popconfirm>
            </span>
        )
    }
    ];

    return (
        <div>
            <Table 
                dataSource={users}
                loading={loading}
                columns={columns}
                total={total}
                pagination={false}
            />

            <Pagination
                className="ant-table-pagination"
                total={total}
                current={current}
                pageSize='5'
                onChange={onChange}
            />
        </div>
    )
}

UserList.propTypes = {
    users: PropTypes.array.isRequired,
    total: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default UserList;