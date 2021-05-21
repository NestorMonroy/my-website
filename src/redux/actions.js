export const receiveLanguage = (content) => ({
  type: "RECEIVE_LANGUAGE",
  content,
});

export const updateEmailTemplate = (templateId) => ({
  type: "UPDATE_EMAIL_TEMPLATE",
  templateId,
});
