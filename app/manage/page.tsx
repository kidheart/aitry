'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

interface Content {
  id: number;
  title: string;
  content: string;
  created_at: string;
}

export default function Manage() {
  const [contents, setContents] = useState<Content[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // 查询内容列表
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

  // 新增内容
  const handleAdd = async () => {
    if (!title.trim() || !content.trim()) {
      setError('标题和内容不能为空');
      return;
    }
    setError('');
    setLoading(true);
    const { error } = await supabase
      .from('content')
      .insert([{ title, content }]);
    if (error) setError(error.message);
    setTitle('');
    setContent('');
    await fetchContents();
    setLoading(false);
  };

  // 删除内容
  const handleDelete = async (id: number) => {
    setLoading(true);
    const { error } = await supabase
      .from('content')
      .delete()
      .eq('id', id);
    if (error) setError(error.message);
    await fetchContents();
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 700, margin: '40px auto', background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px #f0f1f2', padding: 32 }}>
      <h2 style={{ color: '#1677ff', marginBottom: 16 }}>内容管理</h2>
      <p style={{ color: '#555', marginBottom: 24 }}>所有内容都存储在 Supabase 云端数据库，支持多端同步和实时管理。</p>
      <div style={{ marginBottom: 24, background: '#fafbfc', borderRadius: 6, padding: 16 }}>
        <h4 style={{ margin: 0, color: '#222' }}>新增内容</h4>
        <input
          type="text"
          placeholder="标题"
          value={title}
          onChange={e => setTitle(e.target.value)}
          style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #eee', marginBottom: 8, marginTop: 8 }}
        />
        <textarea
          placeholder="内容正文"
          value={content}
          onChange={e => setContent(e.target.value)}
          style={{ width: '100%', minHeight: 60, padding: 8, borderRadius: 6, border: '1px solid #eee', marginBottom: 8 }}
        />
        <button onClick={handleAdd} disabled={loading} style={{ padding: '8px 16px', borderRadius: 6, background: '#1677ff', color: '#fff', border: 'none', fontWeight: 600, fontSize: 15 }}>
          {loading ? '提交中...' : '新增内容'}
        </button>
      </div>
      {error && <div style={{ color: 'red', marginBottom: 16 }}>{error}</div>}
      <div style={{ border: '1px solid #eee', borderRadius: 6, padding: 16, background: '#fafbfc' }}>
        <h4 style={{ margin: 0, color: '#222' }}>内容列表</h4>
        {loading ? <div>加载中...</div> : (
          <ul style={{ margin: '16px 0 0 0', padding: 0, listStyle: 'none' }}>
            {contents.map((c) => (
              <li key={c.id} style={{ padding: '12px 0', borderBottom: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, color: '#222', marginBottom: 4 }}>{c.title}</div>
                  <div style={{ color: '#888', fontSize: 15, whiteSpace: 'pre-wrap' }}>{c.content}</div>
                  <div style={{ color: '#bbb', fontSize: 12, marginTop: 4 }}>{new Date(c.created_at).toLocaleString()}</div>
                </div>
                <button onClick={() => handleDelete(c.id)} style={{ padding: '6px 12px', borderRadius: 6, background: '#ff4d4f', color: '#fff', border: 'none', fontWeight: 600, fontSize: 14, marginLeft: 8 }}>
                  删除
                </button>
              </li>
            ))}
            {contents.length === 0 && <li style={{ color: '#bbb', padding: 16 }}>暂无内容</li>}
          </ul>
        )}
      </div>
    </div>
  );
}