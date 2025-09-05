'use client';

import Link from 'next/link';
import styles from './page.module.css';

const features = [
  {
    icon: '📝',
    title: 'AI内容生成',
    desc: '输入主题或关键词，AI一键生成文章、脚本、文案等内容。',
    href: '/generate',
  },
  {
    icon: '📚',
    title: '内容管理',
    desc: '统一管理已生成内容，支持分类、搜索、同步知识库。',
    href: '/manage',
  },
  {
    icon: '🚀',
    title: '内容分发',
    desc: '一键分发内容到小红书、知乎等平台，统计分发效果。',
    href: '/distribute',
  },
  {
    icon: '💬',
    title: '用户反馈',
    desc: '收集用户建议、需求与投稿，持续优化产品。',
    href: '/feedback',
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.welcomeSection}>
        <h2 className={styles.welcomeTitle}>欢迎来到AI内容星球</h2>
        <p className={styles.welcomeText}>
          一站式AI内容创作与分发平台，助力内容创作者高效生产、管理和分发优质内容，内置数据统计分析，内容价值最大化。
        </p>
      </section>

      <section className={styles.featuresSection}>
        {features.map((feature) => (
          <Link href={feature.href} key={feature.title} className={`card ${styles.featureCard}`}>
            <div className={styles.featureIcon}>{feature.icon}</div>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDesc}>{feature.desc}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
