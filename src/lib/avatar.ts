export const getAvatarUrl = (seed: string) => {
  // Background color is applied via CSS to avoid API rate limiting
  return `https://api.dicebear.com/9.x/lorelei/svg?seed=${seed}`;
};
