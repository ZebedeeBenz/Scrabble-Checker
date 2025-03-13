export interface WordResult {
  isValid: boolean;
  definition?: string;
  score?: number;
}

export interface WordHistory {
  word: string;
  result: WordResult;
  timestamp: number;
}