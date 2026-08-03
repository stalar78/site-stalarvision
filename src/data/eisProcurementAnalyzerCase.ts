export const eisProcurementAnalyzerCase = {
  seo: {
    title: 'EIS Procurement Analyzer — кейс анализа закупочной документации | Stalar Vision',
    description:
      'Кейс разработки системы сбора и доказательного анализа закупочной документации: Playwright, классификация документов, evidence, контроль качества и отдельные уровни решения.',
    canonical: 'https://stalarvision.ru/cases/eis-procurement-analyzer/',
    ogTitle: 'EIS Procurement Analyzer — кейс анализа закупочной документации | Stalar Vision',
    ogDescription:
      'Кейс разработки системы сбора и доказательного анализа закупочной документации: Playwright, классификация документов, evidence, контроль качества и отдельные уровни решения.',
    ogType: 'website',
    robots: 'index,follow',
  },
  hero: {
    label: 'Реальный публичный проект',
    title: 'EIS Procurement Analyzer',
    lead: 'Система сбора и доказательного анализа закупочной документации',
    description:
      'Проект превращает карточки закупок, скачанные документы, технические задания, проекты контрактов, расчеты НМЦК и итоговые протоколы в структурированные показатели, evidence-записи, предупреждения о качестве и отдельные уровни решения для ручной проверки.',
    notes: [
      'Это рабочий аналитический pipeline, а не только парсер отдельных файлов.',
      'Проект не является SaaS-сервисом и не выдает автоматическое решение об участии.',
      'Финальный вывод всегда остается за человеком после просмотра доказательств и ограничений.',
    ],
    primaryCta: {
      label: 'Посмотреть pipeline',
      href: '#pipeline',
    },
    secondaryCta: {
      label: 'Репозиторий на GitHub',
      href: 'https://github.com/stalar78/eis-procurement-analyzer',
    },
  },
  problem: {
    id: 'problem',
    title: 'Что приходится разбирать вручную',
    description:
      'Предварительный анализ закупки обычно распадается на несколько разрозненных потоков: карточка процедуры, вложения, технические требования, проект контракта, расчет НМЦК, требования к заявке, итоговые протоколы и рыночные показатели.',
    items: [
      {
        title: 'Карточки и пагинация',
        description:
          'Нужно пройти по страницам выдачи, собрать карточки, не потерять дубликаты и учесть повторные попытки загрузки.',
      },
      {
        title: 'Вложения и форматы',
        description:
          'Документация приходит в DOCX, PDF, XLSX, архивах и смешанных наборах файлов, где не каждый документ пригоден к прямому извлечению.',
      },
      {
        title: 'Разные типы условий',
        description:
          'Техническое задание, проект контракта, НМЦК, требования к заявке и итоговый протокол несут разные сигналы и не сводятся к одному полю.',
      },
      {
        title: 'Цены и участники',
        description:
          'Нужно отделить исходную цену, итоговую цену, число участников и результат торгов от технической пригодности самой закупки.',
      },
      {
        title: 'Пропуски и конфликты',
        description:
          'Часть значений отсутствует, а часть расходится между документами, поэтому система должна фиксировать неопределенность, а не угадывать ответ.',
      },
    ],
  },
  capabilities: {
    id: 'capabilities',
    title: 'Что делает система',
    description:
      'Pipeline собирает данные, проходит карточки закупок, защищенно скачивает файлы, извлекает содержимое, классифицирует документы и собирает evidence вместе с предупреждениями о качестве.',
    items: [
      'сбор результатов с пагинацией, retries, checkpoints и дедупликацией;',
      'переход по карточкам процедур и обнаружение вложений;',
      'defensive downloads и повторные попытки для нестабильных источников;',
      'извлечение текста и табличных значений из поддерживаемых форматов;',
      'классификация по имени файла, разделу, содержимому и правилам;',
      'строгое извлечение финансовых значений и ключевых условий;',
      'фиксация evidence, unresolved fields, conflicts и quality issues;',
      'раздельные technical verdict, market result status и overall recommendation;',
      'выгрузка итогов в Excel, CSV, JSON и Markdown.',
    ],
  },
  pipeline: {
    id: 'pipeline',
    title: 'Pipeline обработки',
    stages: [
      'Сбор выдачи и карточек закупок',
      'Оценка и отбор кандидатов',
      'Сбор деталей процедуры и документов',
      'Анализ и классификация документов',
      'Evidence, unresolved fields и quality checks',
      'Technical participation verdict',
      'Market result status',
      'Overall recommendation',
      'Экспорт результатов',
    ],
  },
  documentIntelligence: {
    id: 'document-intelligence',
    title: 'Классификация, извлечение и evidence',
    description:
      'Система классифицирует документы по имени файла, разделу источника, содержимому и набору правил, а при извлечении предпочитает пустое значение ложной уверенности.',
    items: [
      {
        title: 'Rule-based classification',
        description:
          'Тип документа определяется по сочетанию filename, source section, текстовых признаков и альтернативных вариантов классификации.',
      },
      {
        title: 'Strict extraction',
        description:
          'Финансовые и смысловые поля извлекаются строго; если подтверждения недостаточно, значение остается отсутствующим.',
      },
      {
        title: 'Evidence records',
        description:
          'Каждое подтвержденное поле можно связать с исходным файлом, типом документа, страницей или листом и текстовым фрагментом.',
      },
      {
        title: 'Контроль качества',
        description:
          'Отдельно фиксируются unresolved fields, conflicts и quality issues, чтобы аналитик видел границы надежности результата.',
      },
    ],
  },
  decisionModel: {
    id: 'decision-model',
    title: 'Три отдельных уровня решения',
    description:
      'Разделение технического вывода, рыночного статуса и общей рекомендации не дает спутать технически подходящую закупку с коммерчески слабым итогом или наоборот.',
    cards: [
      {
        title: 'Technical participation verdict',
        description:
          'Оценивает техническую возможность участия и требования к ручной проверке, но не подменяет окончательное решение.',
      },
      {
        title: 'Market result status',
        description:
          'Показывает, доступны ли рыночные результаты и что известно о финальной цене, участниках и завершении процедуры.',
      },
      {
        title: 'Overall recommendation',
        description:
          'Сводит технические, рыночные и качественные сигналы в итоговую рекомендацию для человека, а не в автоматический бизнес-вердикт.',
      },
    ],
  },
  outputs: {
    id: 'outputs',
    title: 'Что получается на выходе',
    description:
      'Результаты можно просматривать в разных форматах в зависимости от сценария: для ручной проверки, табличного анализа, обмена данными и итоговых заметок.',
    items: [
      {
        title: 'Excel',
        description:
          'Таблицы кандидатов и итоговые выгрузки для ручной фильтрации и просмотра decision fields.',
      },
      {
        title: 'CSV',
        description:
          'Классификация документов, quality issues, unresolved fields и conflicts для последующей обработки.',
      },
      {
        title: 'JSON',
        description:
          'Структурированные показатели анализа, evidence и отдельные слои решения для машинной обработки.',
      },
      {
        title: 'Markdown',
        description:
          'Сводные summary reports для чтения человеком с ключевыми выводами и ограничениями.',
      },
    ],
  },
  syntheticExample: {
    id: 'synthetic-example',
    title: 'Публичный синтетический пример',
    description:
      'Ниже показан безопасный preview только из публичных synthetic examples репозитория: без реальных закупочных документов и без runtime-запросов к GitHub.',
    links: [
      {
        label: 'Examples directory',
        href: 'https://github.com/stalar78/eis-procurement-analyzer/tree/main/examples',
      },
      {
        label: 'sample_analysis.json',
        href: 'https://github.com/stalar78/eis-procurement-analyzer/blob/main/examples/sample_analysis.json',
      },
      {
        label: 'sample_summary.md',
        href: 'https://github.com/stalar78/eis-procurement-analyzer/blob/main/examples/sample_summary.md',
      },
    ],
    analysisPreview: [
      ['procurement_number', '0000000000000000001'],
      ['technical_participation_verdict', 'TAKE_WITH_CONDITIONS'],
      ['market_result_status', 'FULL_RESULT_AVAILABLE'],
      ['overall_recommendation', 'PROMISING'],
      ['data_completeness_score', '88'],
      ['analysis_reliability', 'HIGH'],
    ],
    classificationPreview: [
      ['synthetic_technical_specification.docx', 'technical_specification', 'technical'],
      ['synthetic_contract_draft.docx', 'contract_draft', 'contract'],
      ['synthetic_nmck_calculation.xlsx', 'nmck_calculation', 'nmck'],
      ['synthetic_final_protocol.pdf', 'final_protocol', 'protocol'],
    ],
    summaryPreview: [
      'Synthetic Procurement Analysis Summary',
      'Project concept: development of a demonstration municipal service portal',
      'Technical participation verdict: TAKE_WITH_CONDITIONS',
      'Overall recommendation: PROMISING',
      'The example separates evidence-backed extraction, unresolved fields, quality issues, and market result status.',
    ],
  },
  aggregateFindings: {
    id: 'aggregate-findings',
    title: 'Агрегированные наблюдения',
    disclaimer:
      'Агрегированные наблюдения из проверенного локального набора анализа. Они не являются прогнозом результата участия в закупках.',
    items: [
      { value: '1 237', label: 'уникальных закупок' },
      { value: '15', label: 'отобранных кандидатов' },
      { value: '125', label: 'загруженных документов' },
      { value: '2', label: 'случая снижения не менее чем на 75%' },
      { value: '> 90%', label: 'минимум один подтвержденный случай снижения' },
      { value: '11', label: 'максимальное подтвержденное число участников' },
    ],
  },
  limitations: {
    id: 'limitations',
    title: 'Где нужен ручной разбор',
    items: [
      'эвристики помогают маршрутизировать анализ, но не дают гарантии правильности каждого вывода;',
      'если подтверждений недостаточно, система предпочитает missing вместо guessing;',
      'финальные решения требуют human review по evidence и ограничениям;',
      'наследуемые форматы зависят от доступных утилит извлечения;',
      'OCR опционален и зависит от подключенного toolchain;',
      'селекторы источников и структура страниц могут требовать сопровождения;',
      'проект не включает обход CAPTCHA и границ аутентификации;',
      'результат не является юридической или финансовой гарантией.',
    ],
  },
  technology: {
    id: 'technology',
    title: 'Технологии',
    description:
      'На публичном уровне подтверждены только те технологии и форматы, которые отражены в репозитории и документации проекта.',
    items: [
      'Python',
      'Playwright',
      'Requests',
      'pandas',
      'openpyxl',
      'python-docx',
      'pypdf',
      'BeautifulSoup',
      'archive and legacy document utilities where applicable',
      'pytest',
      'Excel / CSV / JSON / Markdown outputs',
    ],
  },
  repository: {
    id: 'repository',
    title: 'Публичный репозиторий',
    description:
      'Открытый репозиторий содержит исходный код, документацию по архитектуре и методологии, описание выходных форматов, синтетические примеры и тесты.',
    href: 'https://github.com/stalar78/eis-procurement-analyzer',
    label: 'Открыть репозиторий',
  },
  finalCta: {
    title: 'Если у вас похожая аналитическая или автоматизационная задача',
    description:
      'Похожую систему можно начать с одного источника, одного потока документов, одной модели решения и одного воспроизводимого формата выгрузки, а затем расширять по реальным ограничениям процесса.',
    buttonLabel: 'Обсудить задачу',
    buttonHref: '#contact',
  },
} as const;
