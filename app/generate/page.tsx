'use client';
import { useState } from 'react';
import { Button, Input, Card, Typography, Alert, Spin } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import styles from './generate.module.css';

import Title from 'antd/es/typography/Title';
import Paragraph from 'antd/es/typography/Paragraph';
const { TextArea } = Input;

export default function Generate() {
  const [input, setInput] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!input.trim()) {
      setError('请输入内容主题或关键词');
      return;
    }
    setError('');
    setLoading(true);
    setContent('');
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      });
      const data = await res.json();
      if (data.result) {
        setContent(data.result);
      } else {
        setError(data.error || '生成失败');
      }
    } catch (e) {
      setError('网络错误或服务异常');
    } finally {
      setLoading(false);
    }
  };

  const handleExportMarkdown = () => {
    const md = `# AI内容星球\n\n${content}`;
    const blob = new Blob([md], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'AI内容星球-内容.md';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className={styles.container}>
      <Title level={2} className={styles.title}>AI内容生成</Title>
      <Paragraph className={styles.description}>
        输入主题或关键词，AI一键生成文章、脚本、文案等内容。支持腾讯元宝API。
      </Paragraph>

      <Card variant="bordered" className={`${styles.formCard} card`}>
        <TextArea
          rows={4}
          placeholder="请输入内容主题或关键词，例如：\n- 写一篇关于“人工智能对未来的影响”的文章\n- 帮我写一个夏天主题的小红书文案"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          size="large"
        />
        <div className={styles.buttonGroup}>
          <Button
            type="primary"
            onClick={handleGenerate}
            loading={loading}
            size="large"
            className="button-primary"
          >
            生成内容
          </Button>
          <Button
            icon={<DownloadOutlined />}
            onClick={handleExportMarkdown}
            disabled={!content}
            size="large"
          >
            导出为 Markdown
          </Button>
        </div>
      </Card>

      {error && <Alert message={error} type="error" showIcon style={{ marginBottom: 24 }} />}

      <Card title="生成结果" variant="bordered" className={`${styles.resultCard} card`}>
        <Spin spinning={loading} tip="AI正在生成内容...">
          {content ? (
            <pre>{content}</pre>
          ) : (
            <Paragraph type="secondary">（这里将展示AI生成的内容结果）</Paragraph>
          )}
        </Spin>
      </Card>
    </div>
  );
} 