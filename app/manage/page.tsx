'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import {
  Button,
  Form,
  Input,
  Card,
  Typography,
  List,
  Popconfirm,
  Spin,
  Alert,
  Empty,
} from 'antd';
import styles from './manage.module.css';

import Title from 'antd/es/typography/Title';
import Paragraph from 'antd/es/typography/Paragraph';
import Text from 'antd/es/typography/Text';

interface Content {
  id: number;
  title: string;
  content: string;
  created_at: string;
}

export default function Manage() {
  const [contents, setContents] = useState<Content[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form] = Form.useForm();

  const fetchContents = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('content')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) setError(error.message);
    else setContents(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchContents();
  }, []);

  const handleAdd = async (values: { title: string; content: string }) => {
    setError('');
    setLoading(true);
    const { error } = await supabase.from('content').insert([values]);
    if (error) setError(error.message);
    else {
      form.resetFields();
      await fetchContents();
    }
    setLoading(false);
  };

  const handleDelete = async (id: number) => {
    setLoading(true);
    const { error } = await supabase.from('content').delete().eq('id', id);
    if (error) setError(error.message);
    await fetchContents();
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <Title level={2} className={styles.title}>内容管理</Title>
      <Paragraph className={styles.description}>
        所有内容都存储在 Supabase 云端数据库，支持多端同步和实时管理。
      </Paragraph>

      <Card title="新增内容" bordered={false} className={`${styles.formCard} card`}>
        <Form form={form} onFinish={handleAdd} layout="vertical">
          <Form.Item
            name="title"
            label="标题"
            rules={[{ required: true, message: '请输入标题' }]}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            name="content"
            label="内容"
            rules={[{ required: true, message: '请输入内容' }]}
          >
            <Input.TextArea rows={4} size="large" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} size="large" className="button-primary">
              新增内容
            </Button>
          </Form.Item>
        </Form>
      </Card>

      {error && <Alert message={error} type="error" showIcon style={{ marginBottom: 24 }} />}

      <Card title="内容列表" bordered={false} className={`${styles.listCard} card`}>
        <Spin spinning={loading}>
          <List
            dataSource={contents}
            locale={{ emptyText: <Empty description="暂无内容" /> }}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <Popconfirm
                    title="确定删除吗？"
                    onConfirm={() => handleDelete(item.id)}
                    okText="确定"
                    cancelText="取消"
                  >
                    <Button type="link" danger>删除</Button>
                  </Popconfirm>,
                ]}
              >
                <List.Item.Meta
                  title={item.title}
                  description={
                    <>
                      <pre className={styles.listItemContent}>{item.content}</pre>
                      <Text type="secondary">{new Date(item.created_at).toLocaleString()}</Text>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </Spin>
      </Card>
    </div>
  );
}