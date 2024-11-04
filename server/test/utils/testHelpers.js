export const createTestFile = (size) => {
  return new Uint8Array(size);
};

export const createFormData = (content, filename) => {
  const formData = new FormData();
  formData.append('file', new Blob([content], { type: 'text/plain' }), filename);
  return formData;
}; 