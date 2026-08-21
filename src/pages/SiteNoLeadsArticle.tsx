import { siteNoLeadsArticle } from '@/data/articles';
import { siteNoLeadsArticleStructuredData } from '@/data/structuredData';
import { ArticlePage } from './ArticlePage';

export default function SiteNoLeadsArticle() {
  return (
    <ArticlePage
      article={siteNoLeadsArticle}
      structuredData={siteNoLeadsArticleStructuredData}
    />
  );
}
