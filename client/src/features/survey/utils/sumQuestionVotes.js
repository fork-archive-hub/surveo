export const sumQuestionVotes = (question) => {
  return question.answers.reduce((votes, answer) => (votes += answer.votes), 0);
};
