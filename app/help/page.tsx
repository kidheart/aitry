'use client';

export default function Help() {
  return (
    <div style={{ maxWidth: 800, margin: '40px auto', background: '#fff', borderRadius: 12, boxShadow: '0 4px 24px #6366f122', padding: 40 }}>
      <h2 style={{ color: '#1677ff', marginBottom: 20, fontSize: 32 }}>帮助与文档</h2>
      <p style={{ color: '#555', marginBottom: 32, fontSize: 18 }}>
        这里汇总了产品文档、原型设计、常见问题和联系方式，方便你快速了解和使用本平台。
      </p>
      <div style={{ marginBottom: 32 }}>
        <h4 style={{ color: '#1677ff', margin: 0, marginBottom: 12 }}>产品文档（Notion）</h4>
        <a href="https://www.notion.so/22f79b19501880cdaab3efed0fe25759?source=copy_link" target="_blank" rel="noopener" style={{ fontSize: 17, color: '#6366f1', fontWeight: 600, textDecoration: 'underline' }}>
          👉 点击查看 Notion 产品文档
        </a>
      </div>
      <div style={{ marginBottom: 32 }}>
        <h4 style={{ color: '#1677ff', margin: 0, marginBottom: 12 }}>产品原型（Figma）</h4>
        <a href="#" target="_blank" rel="noopener" style={{ fontSize: 17, color: '#a855f7', fontWeight: 600, textDecoration: 'underline' }}>
          👉 点击查看 Figma 原型（占位，可后续替换）
        </a>
      </div>
      <div style={{ marginBottom: 32 }}>
        <h4 style={{ color: '#1677ff', margin: 0, marginBottom: 12 }}>常见问题</h4>
        <ul style={{ fontSize: 15, color: '#555', paddingLeft: 20 }}>
          <li>如何导出内容到 Obsidian？—— 在内容页点击“导出为 Markdown”即可。</li>
          <li>如何提交反馈？—— 在用户反馈页填写表单即可。</li>
          <li>如何体验内容分发？—— 在内容分发页选择内容和平台，点击“一键分发”即可。</li>
        </ul>
      </div>
      <div>
        <h4 style={{ color: '#1677ff', margin: 0, marginBottom: 12 }}>联系方式</h4>
        <div style={{ fontSize: 15, color: '#555' }}>如需交流或合作，请联系：your@email.com</div>
      </div>
    </div>
  );
} 