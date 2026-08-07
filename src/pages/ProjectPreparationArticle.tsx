import { projectPreparationArticle } from '@/data/articles';
import { projectPreparationArticleStructuredData } from '@/data/structuredData';
import { ArticlePage } from './ArticlePage';

export default function ProjectPreparationArticle() {
  return (
    <ArticlePage
      article={projectPreparationArticle}
      structuredData={projectPreparationArticleStructuredData}
    />
  );
}
