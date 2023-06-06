import React, { memo } from 'react'
import styles from './Register.module.scss'
import { Link } from 'react-router-dom'
import { LOGIN_PATH } from '@/router'
import { Typography, Space, Form, Input, Button } from 'antd'
import { UserAddOutlined } from '@ant-design/icons'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const { Title } = Typography

/**
 * @desc 注册页
 * @Author bk0x114
 * @Date 2023-06-06 14:47:20
 */
const Register: FC<IProps> = () => {
  const onFinish = (values: any) => {
    console.log(values)
  }

  return (
    <div className={styles.container}>
      <div>
        <Space>
          <Title level={2}>
            <UserAddOutlined rev={undefined} />
          </Title>
          <Title level={2}>注册新用户</Title>
        </Space>
      </div>
      <div>
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[
              { required: true, message: '用户名不能为空哦' },
              {
                type: 'string',
                min: 5,
                max: 20,
                message: '用户名长度在5~20之间'
              },
              {
                pattern: /^[a-zA-Z0-9_]+$/,
                message: '用户名只能由字母、数字、下划线组成'
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[
              { required: true, message: '密码不能为空哦' },
              {
                pattern:
                  /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*,._])[0-9a-zA-Z!@#$%^&*,\\._]{8,12}$/,
                message:
                  '密码必须包含大小写字母,特殊字符和数字，且长度不低于8位'
              }
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="确认密码"
            name="confirm"
            dependencies={['password']}
            rules={[
              { required: true, message: '请确认您输入的密码' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(new Error('两次输入的密码不一致'))
                }
              })
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item label="昵称" name="nickname">
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Space direction="vertical">
              <Button type="primary" htmlType="submit" block>
                注册
              </Button>
              <Link to={LOGIN_PATH}>已有账号？快点击这里登录吧！</Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default memo(Register)
