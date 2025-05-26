export type SurveyOption = {
  choiceId: number;
  content: string;
};

export type SurveyChoice = {
  surveyId: number;
  options: SurveyOption[];
};
