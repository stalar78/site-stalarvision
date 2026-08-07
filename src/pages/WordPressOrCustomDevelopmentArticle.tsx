import { wordpressOrCustomArticle } from '@/data/articles';
import { wordpressOrCustomArticleStructuredData } from '@/data/structuredData';
import { ArticlePage } from './ArticlePage';

export default function WordPressOrCustomDevelopmentArticle() {
  return (
    <ArticlePage
      article={wordpressOrCustomArticle}
      structuredData={wordpressOrCustomArticleStructuredData}
    />
  );
}
