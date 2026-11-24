
export const buildUserData = (baseData) => {
  const uniqueSuffix = Date.now();

  return {
    ...baseData,
    username: `qa_user_${uniqueSuffix}`,
//
    password: `Qa@${String(uniqueSuffix).slice(-6)}xY1`,
  };
};