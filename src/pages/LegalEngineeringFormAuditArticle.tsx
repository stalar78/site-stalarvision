import { legalEngineeringFormAuditArticle } from '@/data/articles';
import { legalEngineeringFormAuditArticleStructuredData } from '@/data/structuredData';
import { ArticlePage } from './ArticlePage';

export default function LegalEngineeringFormAuditArticle() {
  return (
    <ArticlePage
      article={legalEngineeringFormAuditArticle}
      structuredData={legalEngineeringFormAuditArticleStructuredData}
    />
  );
}
