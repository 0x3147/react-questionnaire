import React, { memo, useEffect } from 'react'
import { Form, Input } from 'antd'

import type { FC, ReactNode } from 'react'
import type { IQuestionInputProps } from '../QuestionInputStandards'

interface IProps {
  children?: ReactNode
}

type currentProps = IProps & IQuestionInputProps

const PropComponent: FC<currentProps> = ({ title, placeholder, onChange }) => {
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({ title, placeholder })
  }, [title, placeholder])

  const handleValuesChange = () => {
    if (onChange) {
      onChange(form.getFieldsValue())
    }
  }

  return (
    <>
      <Form
        layout="vertical"
        initialValues={{ title, placeholder }}
        onValuesChange={handleValuesChange}
      >
        <Form.Item
          label="标题"
          name="title"
          rules={[{ required: true, message: '标题不能为空' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Placeholder" name="placeholder">
          <Input />
        </Form.Item>
      </Form>
    </>
  )
}

export default memo(PropComponent)
