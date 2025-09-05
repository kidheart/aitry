'use client';
import { useState } from 'react';
import { Button, Checkbox, Select, Card, Typography, List, Alert, notification } from 'antd';
import styles from './distribute.module.css';

import Title from 'antd/es/typography/Title';
import Paragraph from 'antd/es/typography/Paragraph';

const contents = [
  {
    title: '如何用AI高效写作？',
    body: 'AI可以帮助你自动生成文章大纲、润色内容、提升写作效率。',
  },
  {
    title: '内容分发的最佳实践',
    body: '选择合适的平台、定时推送、分析数据反馈，不断优化内容策略。',
  },
  {
    title: '自媒体人如何用AI提升效率',
    body: '利用AI工具批量生成内容、自动排版、智能校对，节省大量时间。',
  },
];

export default function Distribute() {
  const [selected, setSelected] = useState<number[]>([]);
  const [platform, setPlatform] = useState<string | undefined>(undefined);
  const [error, setError] = useState('');

  const handleSelect = (idx: number) => {
    setSelected((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const handleDistribute = () => {
    if (selected.length === 0 || !platform) {
      setError('请先选择内容和分发平台！');
      return;
    }
    setError('');
    notification.success({
      message: '分发成功',
      description: `已模拟分发${selected.length}条内容到${platform}！`,
    });
  };

  return (
    <div className={styles.container}>
      <Title level={2} className={styles.title}>内容分发</Title>
      <Paragraph className={styles.description}>
        选择要分发的内容和平台，一键分发到小红书、知乎等新媒体平台，统计分发效果。
      </Paragraph>

      <Card title="选择要分发的内容" variant="bordered" className={`${styles.card} card`}>
        <List
          dataSource={contents}
          renderItem={(item, index) => (
            <List.Item
              className={styles.listItem}
              actions={[<Checkbox checked={selected.includes(index)} onChange={() => handleSelect(index)} />]}
            >
              <List.Item.Meta title={item.title} description={item.body} />
            </List.Item>
          )}
        />
        <div className={styles.selectGroup}>
          <Select
            placeholder="请选择分发平台"
            value={platform}
            onChange={setPlatform}
            size="large"
            className={styles.platformSelect}
          >
            <Select.Option value="小红书">小红书</Select.Option>
            <Select.Option value="知乎">知乎</Select.Option>
          </Select>
          <Button type="primary" onClick={handleDistribute} size="large" className="button-primary">
            一键分发
          </Button>
        </div>
      </Card>

      {error && <Alert message={error} type="error" showIcon style={{ marginBottom: 24 }} />}

      <Card title="内容分发平台说明" variant="bordered" className={`${styles.infoCard} card`}>
        <ul>
          <li><b>小红书：</b>适合图文、短视频内容，分发时注意封面、标题和标签优化，内容要有实用性和分享感。</li>
          <li><b>知乎：</b>适合长文、问答、干货内容，分发时注重结构清晰、观点鲜明，适当插入图片提升可读性。</li>
        </ul>
        <Paragraph type="secondary" style={{ marginTop: 12 }}>
          （本功能为模拟分发，实际可通过平台API或手动发布实现）
        </Paragraph>
      </Card>
    </div>
  );
} 