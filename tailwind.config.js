module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        'oswald': ['Oswald'],
        'work-sans': ['"Work Sans"'],
        'dm-serif': ['"DM Serif Text"']
      },
    },
  },
  plugins: []
}
