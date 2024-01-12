import { Button, Checkbox, Form, FormProps, Input, message } from 'antd';
import { useMutation } from '@tanstack/react-query';
import { postTestApi } from '@/domain/service/api.service';
import { FormBodyDto } from '@/domain/service/service.interface';
import { isAxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

export default function Index() {
  const navigate = useNavigate();
  const { data, mutate } = useMutation({
    mutationFn: postTestApi,
    onSuccess: () => {
      navigate('/trip/list');
      return message.success('새로운 예약 건이 등록되었습니다.');
    },
    onError: (error, variables, context) => {
      if (isAxiosError(error)) {
        return message.error(error.response.data.errorMessage);
      }
    },
  });

  const onFinish: FormProps<FormBodyDto>['onFinish'] = (values) => {
    mutate(values);
  };

  const onFinishFailed: FormProps<FormBodyDto>['onFinishFailed'] = (errorInfo) => {
    console.log(errorInfo);
  };

  return (
    <Form
      name="basic"
      // labelCol={{ span: 8 }}
      // wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off">
      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[ { required: true, message: 'Please input your username!' } ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[ { required: true, message: 'Please input your password!' } ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType>
        name="remember"
        valuePropName="checked"
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}