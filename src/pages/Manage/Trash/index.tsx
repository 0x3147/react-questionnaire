import React, { memo, useState } from 'react'
import styles from '../List/List.module.scss'
import useLoadQuestionListData from '@/hooks/useLoadQuestionListData'
import {
  Typography,
  Empty,
  Table,
  Tag,
  Button,
  Space,
  Modal,
  message,
  Spin,
  Affix
} from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { useTitle } from 'ahooks'
import ListSearch from '@/components/ListSearch'
import ListPagination from '@/components/ListPagination'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const { Title } = Typography
const { confirm } = Modal

/**
 * @desc 回收站列表页
 * @Author bk0x114
 * @Date 2023-06-06 00:25:35
 */
const Trash: FC<IProps> = () => {
  useTitle('问卷回收站')

  const [selectIds, setSelectIds] = useState<string[]>([])

  const { data, loading } = useLoadQuestionListData({ isDeleted: true })
  const { list = [], total = 0 } = data || {}

  /**
   * @desc 彻底删除
   * @Author bk0x114
   * @Date 2023-04-06 01:01:18
   */
  const handleDelete = () => {
    confirm({
      title: '确定彻底删除吗？',
      okText: '我想好了，删除！',
      cancelText: '再考虑一下',
      icon: <ExclamationCircleOutlined rev={undefined} />,
      content: '再次提示您，彻底删除后，该问卷数据将无法找回',
      onOk: async () =>
        await message.success(`删除了${JSON.stringify(selectIds)}`)
    })
  }

  const tableColumns = [
    {
      title: '问卷标题',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: '是否发布',
      dataIndex: 'isPublished',
      render: (isPublished: boolean) => {
        return isPublished ? (
          <Tag color="processing">已发布</Tag>
        ) : (
          <Tag>未发布</Tag>
        )
      },
      key: 'isPublished'
    },
    {
      title: '答卷数量',
      dataIndex: 'answerCount',
      key: 'answerCount'
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      key: 'createdAt'
    }
  ]

  const TableView = (
    <>
      <div style={{ marginBottom: '16px' }}>
        <Space>
          <Button
            danger
            disabled={selectIds.length === 0}
            onClick={handleDelete}
          >
            彻底删除
          </Button>
          <Button type="primary" disabled={selectIds.length === 0}>
            恢复
          </Button>
        </Space>
      </div>
      <Table
        dataSource={list}
        columns={tableColumns}
        pagination={false}
        rowKey={(record) => record._id}
        rowSelection={{
          type: 'checkbox',
          onChange: (selectedRowKeys, selectedRows) => {
            setSelectIds(selectedRowKeys as string[])
          }
        }}
      />
    </>
  )

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>问卷回收</Title>
        </div>
        <div className={styles.right}>
          <Affix offsetTop={20}>
            <ListSearch />
          </Affix>
        </div>
      </div>
      <div className={styles.content}>
        {loading && (
          <div style={{ textAlign: 'center' }}>
            <Spin />
          </div>
        )}
        {!loading && list.length === 0 && (
          <Empty description="您还没有删除任何问卷哦~" />
        )}
        {list.length > 0 && TableView}
      </div>
      <div className={styles.footer}>
        {!loading && <ListPagination total={total} />}
      </div>
    </>
  )
}

export default memo(Trash)
