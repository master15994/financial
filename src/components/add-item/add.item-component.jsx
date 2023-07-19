import {
  Button,
  Form,
  Input,
  InputNumber,
  message,
  Select,
  Space,
  Typography,
} from 'antd';
import { React } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import a from './add.item.module.css';

const AddItemComponent = ({ onTransactionAdded }) => {
  const options = [{ value: 'Доход' }, { value: 'Расход' }];
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const { Title } = Typography;

  const addTransaction = transaction => {
    onTransactionAdded(transaction);
  };

  const onReset = () => {
    form.resetFields();
  };

  const showMessage = () => {
    messageApi.success('Транзакция добавлена');
  };

  const onFinish = values => {
    const transaction = {
      ...values,
      createDate: new Date(),
      updateDate: null,
      id: uuidv4(),
    };
    addTransaction(transaction);
    onReset();
    showMessage();
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <Title level={2}>Добавить транзакцию</Title>
      {contextHolder}
      <Form
        name="basic"
        form={form}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="description"
          rules={[{ required: true, message: 'Это поле обязательно!' }]}
        >
          <Input className={a.input} placeholder="Описание" />
        </Form.Item>

        <Form.Item
          name="sum"
          initialValue="1"
          rules={[{ required: true, message: 'Это поле обязательно!' }]}
        >
          <InputNumber defaultValue={1} min={1} />
        </Form.Item>

        <Form.Item
          name="type"
          initialValue="Доход"
          rules={[{ required: true, message: 'Это поле обязательно!' }]}
        >
          <Space wrap>
            <Select
              className={a.select}
              defaultValue="Доход"
              options={options}
            />
          </Space>
        </Form.Item>
        <Button htmlType="submit" type="primary">
          Добавить транзакцию
        </Button>
      </Form>
      <Button type="link">
        <Link to="/list">Список транзакций</Link>
      </Button>
    </div>
  );
};

export default AddItemComponent;
