'use client';

import { Row, Col, Card, Typography } from "antd";
import { FileTextOutlined, DatabaseOutlined, ShareAltOutlined, MessageOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const features = [
  {
    title: "AI内容生成",
    icon: <FileTextOutlined style={{ fontSize: 36, color: '#1677ff' }} />,
    desc: "输入主题或关键词，AI一键生成文章、脚本、文案等内容。",
    href: "/generate",
  },
  {
    title: "内容管理",
    icon: <DatabaseOutlined style={{ fontSize: 36, color: '#722ed1' }} />,
    desc: "统一管理已生成内容，支持分类、搜索、同步知识库。",
    href: "/manage",
  },
  {
    title: "内容分发",
    icon: <ShareAltOutlined style={{ fontSize: 36, color: '#eb2f96' }} />,
    desc: "一键分发内容到小红书、知乎等平台，统计分发效果。",
    href: "/distribute",
  },
  {
    title: "用户反馈",
    icon: <MessageOutlined style={{ fontSize: 36, color: '#faad14' }} />,
    desc: "收集用户建议、需求与投稿，持续优化产品。",
    href: "/feedback",
  },
];

const gradient = "linear-gradient(90deg, #6366f1 0%, #a855f7 100%)";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "#f7f8fa" }}>
      {/* 顶部品牌栏 */}
      <header style={{
        width: '100%',
        padding: '32px 0 0 0',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'transparent',
        position: 'relative',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
        }}>
          <div style={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            background: gradient,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 900,
            fontSize: 28,
            color: '#fff',
            boxShadow: '0 4px 24px #a855f733',
            letterSpacing: 2,
          }}>星</div>
          <span style={{ fontSize: 32, fontWeight: 700, color: '#222', letterSpacing: 2 }}>AI内容星球</span>
        </div>
        {/* 帮助按钮 */}
        <a href="/help" style={{
          position: 'absolute',
          right: 40,
          top: 32,
          padding: '8px 22px',
          borderRadius: 24,
          background: gradient,
          color: '#fff',
          fontWeight: 600,
          fontSize: 17,
          textDecoration: 'none',
          boxShadow: '0 2px 8px #a855f722',
          transition: 'background 0.2s',
        }}
          onMouseOver={e => (e.currentTarget.style.background = 'linear-gradient(90deg, #a855f7 0%, #6366f1 100%)')}
          onMouseOut={e => (e.currentTarget.style.background = gradient)}
        >
          帮助与文档
        </a>
        <div style={{ marginTop: 16, fontSize: 20, color: '#6366f1', fontWeight: 500, letterSpacing: 1, position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 80 }}>
          让AI内容创作更高效、更有价值
        </div>
      </header>

      {/* 内容区 */}
      <main style={{ maxWidth: 1100, margin: '48px auto 0 auto', padding: '0 24px' }}>
        <section style={{
          background: '#fff',
          borderRadius: 16,
          boxShadow: '0 4px 32px #6366f11a',
          padding: '40px 32px',
          marginBottom: 40,
          textAlign: 'center',
        }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: '#222', margin: 0 }}>欢迎来到AI内容星球</h2>
          <p style={{ color: '#666', fontSize: 18, marginTop: 18, marginBottom: 0 }}>
            一站式AI内容创作与分发平台，助力内容创作者高效生产、管理和分发优质内容，内置数据统计分析，内容价值最大化。
          </p>
        </section>
        <section style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 32,
          justifyContent: 'center',
        }}>
          {/* 功能卡片 */}
          <a href="/generate" style={{
            flex: '1 1 220px',
            maxWidth: 260,
            background: '#fff',
            borderRadius: 16,
            boxShadow: '0 4px 24px #6366f11a',
            padding: 32,
            textAlign: 'center',
            textDecoration: 'none',
            color: '#222',
            transition: 'transform 0.2s, box-shadow 0.2s',
            cursor: 'pointer',
            position: 'relative',
          }}
            onMouseOver={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-6px) scale(1.04)';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 32px #6366f133';
            }}
            onMouseOut={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = '';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 24px #6366f11a';
            }}
          >
            <div style={{ fontSize: 44, marginBottom: 18, background: gradient, WebkitBackgroundClip: 'text', color: 'transparent', fontWeight: 900 }}>📝</div>
            <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>AI内容生成</h3>
            <p style={{ color: '#888', marginTop: 12, fontSize: 15 }}>输入主题或关键词，AI一键生成文章、脚本、文案等内容。</p>
          </a>
          <a href="/manage" style={{
            flex: '1 1 220px',
            maxWidth: 260,
            background: '#fff',
            borderRadius: 16,
            boxShadow: '0 4px 24px #6366f11a',
            padding: 32,
            textAlign: 'center',
            textDecoration: 'none',
            color: '#222',
            transition: 'transform 0.2s, box-shadow 0.2s',
            cursor: 'pointer',
            position: 'relative',
          }}
            onMouseOver={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-6px) scale(1.04)';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 32px #6366f133';
            }}
            onMouseOut={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = '';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 24px #6366f11a';
            }}
        >
            <div style={{ fontSize: 44, marginBottom: 18, background: gradient, WebkitBackgroundClip: 'text', color: 'transparent', fontWeight: 900 }}>📚</div>
            <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>内容管理</h3>
            <p style={{ color: '#888', marginTop: 12, fontSize: 15 }}>统一管理已生成内容，支持分类、搜索、同步知识库。</p>
        </a>
          <a href="/distribute" style={{
            flex: '1 1 220px',
            maxWidth: 260,
            background: '#fff',
            borderRadius: 16,
            boxShadow: '0 4px 24px #6366f11a',
            padding: 32,
            textAlign: 'center',
            textDecoration: 'none',
            color: '#222',
            transition: 'transform 0.2s, box-shadow 0.2s',
            cursor: 'pointer',
            position: 'relative',
          }}
            onMouseOver={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-6px) scale(1.04)';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 32px #6366f133';
            }}
            onMouseOut={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = '';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 24px #6366f11a';
            }}
        >
            <div style={{ fontSize: 44, marginBottom: 18, background: gradient, WebkitBackgroundClip: 'text', color: 'transparent', fontWeight: 900 }}>🚀</div>
            <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>内容分发</h3>
            <p style={{ color: '#888', marginTop: 12, fontSize: 15 }}>一键分发内容到小红书、知乎等平台，统计分发效果。</p>
        </a>
          <a href="/feedback" style={{
            flex: '1 1 220px',
            maxWidth: 260,
            background: '#fff',
            borderRadius: 16,
            boxShadow: '0 4px 24px #6366f11a',
            padding: 32,
            textAlign: 'center',
            textDecoration: 'none',
            color: '#222',
            transition: 'transform 0.2s, box-shadow 0.2s',
            cursor: 'pointer',
            position: 'relative',
          }}
            onMouseOver={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-6px) scale(1.04)';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 32px #6366f133';
            }}
            onMouseOut={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = '';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 24px #6366f11a';
            }}
        >
            <div style={{ fontSize: 44, marginBottom: 18, background: gradient, WebkitBackgroundClip: 'text', color: 'transparent', fontWeight: 900 }}>💬</div>
            <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>用户反馈</h3>
            <p style={{ color: '#888', marginTop: 12, fontSize: 15 }}>收集用户建议、需求与投稿，持续优化产品。</p>
        </a>
        </section>
      </main>
    </div>
  );
}
