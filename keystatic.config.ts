import { config, fields, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  singletons: {
    tacoOfTheMonth: singleton({
      label: 'Taco of the Month',
      path: 'src/content/taco-of-the-month/index',
      format: { data: 'json' },
      schema: {
        name: fields.text({ label: 'Name' }),
        image: fields.image({
          label: 'Image',
          directory: 'public/taco-of-the-month',
          publicPath: '/taco-of-the-month/',
        }),
      },
    }),
  },
});
