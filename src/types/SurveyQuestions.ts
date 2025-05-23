export type SurveyOption = {
  number: number;
  content: string;
};

export type SurveyChoice = {
  surveyId: number;
  surveyNumber: number;
  options: SurveyOption[];
};

