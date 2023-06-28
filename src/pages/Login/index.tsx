import React, { memo, useEffect } from 'react'
import styles from './Login.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { loginService } from '@/services/user'
import { MANAGE_INDEX_PATH, REGISTER_PATH } from '@/router'
import { useRequest } from 'ahooks'
import { Typography, Space, Form, Input, Button, Checkbox, message } from 'antd'
import { LoginOutlined } from '@ant-design/icons'
import { setToken } from '@/utils/user-token'

import type { FC, ReactNode } from 'react'

const USERNAME_KEY = 'username'
const PASSWORD_KEY = 'PASSWORD'

/**
 * @desc 记住用户信息
 * @Author bk0x114
 * @Date 2023-06-06 14:31:56
 * @param username 用户名
 * @param password 密码
 */
const rememberUser = (username: string, password: string) => {
  localStorage.setItem(USERNAME_KEY, username)
  localStorage.setItem(PASSWORD_KEY, password)
}

/**
 * @desc 删除用户信息
 * @Author bk0x114
 * @Date 2023-06-06 14:32:16
 */
const deleteUserStorage = () => {
  localStorage.removeItem(USERNAME_KEY)
  localStorage.removeItem(PASSWORD_KEY)
}

/**
 * @desc 获取用户信息
 * @Author bk0x114
 * @Date 2023-06-06 14:32:24
 */
const getUserStorage = () => {
  return {
    username: localStorage.getItem(USERNAME_KEY),
    password: localStorage.getItem(PASSWORD_KEY)
  }
}

interface IProps {
  children?: ReactNode
}

const { Title } = Typography

/**
 * @desc 登录页
 * @Author bk0x114
 * @Date 2023-06-06 14:24:59
 */
const Login: FC<IProps> = () => {
  const [form] = Form.useForm()

  const nav = useNavigate()

  useEffect(() => {
    const { username, password } = getUserStorage()
    form.setFieldsValue({ username, password })
  }, [])

  const { run } = useRequest(
    async (username: string, password: string) => {
      return await loginService(username, password)
    },
    {
      manual: true,
      onSuccess: async (res) => {
        const { token = '' } = res
        setToken(token)
        await message.success('登录成功！')
        nav(MANAGE_INDEX_PATH)
      }
    }
  )

  /**
   * @desc 表单提交
   * @Author bk0x114
   * @Date 2023-06-06 14:32:47
   * @param values 表单数据
   */
  const onFinish = (values: any) => {
    const { username, password, remember } = values || {}

    run(username, password)

    if (remember) {
      rememberUser(username, password)
    } else {
      deleteUserStorage()
    }
  }

  return (
    <div className={styles.container}>
      <div>
        <Space>
          <Title level={2}>
            <LoginOutlined rev={undefined} />
          </Title>
          <Title level={2}>登录</Title>
        </Space>
      </div>
      <div>
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          initialValues={{ remember: true }}
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
            rules={[{ required: true, message: '密码不能为空哦' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 6, span: 16 }}
          >
            <Checkbox>记住我</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Space direction="vertical">
              <Button type="primary" htmlType="submit" block>
                登录
              </Button>
              <Link to={REGISTER_PATH}>还没有账号？点击这里去注册一个吧！</Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default memo(Login)
