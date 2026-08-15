import { webServiceOrPersonalAccountArticle } from '@/data/articles';
import { webServiceOrPersonalAccountArticleStructuredData } from '@/data/structuredData';
import { ArticlePage } from './ArticlePage';

export default function WebServiceOrPersonalAccountArticle() {
  return (
    <ArticlePage
      article={webServiceOrPersonalAccountArticle}
      structuredData={webServiceOrPersonalAccountArticleStructuredData}
    />
  );
}
