import { buildPortfolioChunks, type PortfolioChunk } from "./portfolio-data";

const STOP_WORDS = new Set([
  "a",
  "an",
  "the",
  "is",
  "are",
  "was",
  "were",
  "be",
  "been",
  "being",
  "have",
  "has",
  "had",
  "do",
  "does",
  "did",
  "will",
  "would",
  "could",
  "should",
  "may",
  "might",
  "must",
  "shall",
  "can",
  "need",
  "dare",
  "ought",
  "used",
  "to",
  "of",
  "in",
  "for",
  "on",
  "with",
  "at",
  "by",
  "from",
  "as",
  "into",
  "through",
  "during",
  "before",
  "after",
  "above",
  "below",
  "between",
  "under",
  "again",
  "further",
  "then",
  "once",
  "here",
  "there",
  "when",
  "where",
  "why",
  "how",
  "all",
  "each",
  "few",
  "more",
  "most",
  "other",
  "some",
  "such",
  "no",
  "nor",
  "not",
  "only",
  "own",
  "same",
  "so",
  "than",
  "too",
  "very",
  "just",
  "and",
  "but",
  "if",
  "or",
  "because",
  "until",
  "while",
  "about",
  "against",
  "what",
  "which",
  "who",
  "whom",
  "this",
  "that",
  "these",
  "those",
  "am",
  "i",
  "me",
  "my",
  "you",
  "your",
  "he",
  "she",
  "it",
  "we",
  "they",
  "them",
  "their",
  "tell",
  "know",
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s/+.-]/g, " ")
    .split(/\s+/)
    .filter((token) => token.length > 1 && !STOP_WORDS.has(token));
}

function termFrequency(tokens: string[]): Map<string, number> {
  const tf = new Map<string, number>();
  for (const token of tokens) {
    tf.set(token, (tf.get(token) ?? 0) + 1);
  }
  return tf;
}

function scoreChunk(queryTokens: string[], chunk: PortfolioChunk): number {
  const chunkTokens = tokenize(`${chunk.title} ${chunk.content} ${chunk.keywords.join(" ")}`);
  const chunkTf = termFrequency(chunkTokens);
  const queryTf = termFrequency(queryTokens);

  let score = 0;
  for (const [term, queryCount] of queryTf) {
    const chunkCount = chunkTf.get(term) ?? 0;
    if (chunkCount > 0) {
      score += queryCount * chunkCount;
    }
  }

  for (const keyword of chunk.keywords) {
    if (queryTokens.some((token) => keyword.includes(token) || token.includes(keyword))) {
      score += 2;
    }
  }

  return score;
}

export function retrieveRelevantChunks(
  query: string,
  topK = 4,
): PortfolioChunk[] {
  const chunks = buildPortfolioChunks();
  const queryTokens = tokenize(query);

  if (queryTokens.length === 0) {
    return chunks.slice(0, topK);
  }

  return chunks
    .map((chunk) => ({ chunk, score: scoreChunk(queryTokens, chunk) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .map(({ chunk }) => chunk);
}

export function buildRagContext(query: string): string {
  const chunks = retrieveRelevantChunks(query);
  if (chunks.length === 0) {
    return buildPortfolioChunks()
      .map((chunk) => `[${chunk.title}]\n${chunk.content}`)
      .join("\n\n");
  }

  return chunks
    .map((chunk) => `[${chunk.title}]\n${chunk.content}`)
    .join("\n\n");
}

export const CHAT_SUGGESTIONS = [
  "What ML projects have you built?",
  "Tell me about Arena",
  "What is your experience with AWS and GCP?",
  "What AI/ML skills do you have?",
];
