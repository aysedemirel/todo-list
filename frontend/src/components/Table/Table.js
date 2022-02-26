import React from "react";

import 'antd/dist/antd.css';
import { Table, Tag, Space, Input, Button, Tooltip } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined, EditOutlined, DeleteOutlined, CheckCircleOutlined } from '@ant-design/icons';

class ItemTable extends React.Component {
    state = {
        filteredInfo: null,
        sortedInfo: null,
        searchText: '',
        searchedColumn: '',
    };
    handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        this.setState({
            filteredInfo: filters,
            sortedInfo: sorter,
        });
    };
    clearFilters = () => {
        this.setState({ filteredInfo: null });
    };

    clearAll = () => {
        this.setState({
            filteredInfo: null,
            sortedInfo: null,
        });
    };
    setPrioritySort = () => {
        this.setState({
            sortedInfo: {
                order: 'descend',
                columnKey: 'priority',
            },
        });
    };
    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            this.setState({
                                searchText: selectedKeys[0],
                                searchedColumn: dataIndex,
                            });
                        }}
                    >
                        Filter
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
                : '',
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select(), 100);
            }
        },
        render: text =>
            this.state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });
    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };
    render() {
        let { sortedInfo, filteredInfo } = this.state;
        sortedInfo = sortedInfo || {};
        filteredInfo = filteredInfo || {};
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                render: text => <a>{text}</a>,
                ...this.getColumnSearchProps('name'),
                ellipsis: {
                    showTitle: false,
                },
                render: name => (
                    <Tooltip placement="topLeft" title={name}>
                        {name}
                    </Tooltip>
                ),
            },
            {
                title: 'Priority',
                dataIndex: 'priority',
                key: 'priority',
                filters: [
                    { text: 'Highest priority', value: "5" },
                    { text: 'High Priority', value: "4" },
                    { text: 'Normal', value: "3" },
                    { text: 'Low priority', value: "2" },
                    { text: 'No priority', value: "1" },
                ],
                filteredValue: filteredInfo.priority || null,
                onFilter: (value, record) => record.priority == value,
                sorter: (a, b) => a.priority - b.priority,
                sortOrder: sortedInfo.columnKey === 'priority' && sortedInfo.order,
                render: priority => {
                    let color, priorityText;
                    switch (priority) {
                        case 1:
                            priorityText = "No priority";
                            color = 'geekblue';
                            break;
                        case 2:
                            priorityText = "Low priority";
                            color = 'geekblue';
                            break;
                        case 4:
                            priorityText = "High priority";
                            color = 'volcano';
                            break;
                        case 5:
                            priorityText = "Highest priority";
                            color = 'volcano';
                            break;
                        default:
                            priorityText = "normal";
                            color = 'green';
                            break;
                    }
                    return (
                        <Tag color={color} key={priority}>
                            {priorityText.toUpperCase()}
                        </Tag>
                    );
                },
            },
            {
                title: 'Planned Date',
                dataIndex: 'date',
                key: 'date',
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        <Tooltip title="check">
                            <Button shape="circle" icon={<CheckCircleOutlined />} />
                        </Tooltip>
                        <Tooltip title="edit">
                            <Button shape="circle" icon={<EditOutlined />} />
                        </Tooltip>
                        <Tooltip title="delete">
                            <Button shape="circle" icon={<DeleteOutlined />} />
                        </Tooltip>
                    </Space>
                ),
            },
        ];
        return (
            <div>
                <h2>{this.props.title}</h2>
                <Table columns={columns} dataSource={this.props.data} onChange={this.handleChange} pagination={{ pageSize: 10, showSizeChanger: true, showQuickJumper: true }} scroll={{ y: 240 }} />
            </div>
        );
    }
}

export default ItemTable;