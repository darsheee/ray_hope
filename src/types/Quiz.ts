export interface Quiz {
  id: string;
  displayName: string;
  questions: Question[];
}

export interface Question {
  number?: number;
  question: string;
  choices: string[];
  correct: number;
}
