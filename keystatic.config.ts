import { config, fields, singleton, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    reviews: collection({
      label: 'Reviews',
      path: 'src/content/reviews/*',
      slugField: 'slug',
      columns: ['list_title', 'display'],
      format: { data: 'json' },
      schema: {
        list_title: fields.text({ label: 'List Title' }),
        created_at: fields.date({ label: 'Created At' }),
        display: fields.checkbox({ label: 'Display' }),
        name: fields.text({ label: 'Name' }),
        quote: fields.text({ label: 'Quote', multiline: true }),
        platform: fields.select({
          label: 'Platform',
          options: [
            { label: 'Google', value: 'Google' },
            { label: 'Yelp', value: 'Yelp' },
            { label: 'EZCater', value: 'EZCater' },
          ],
          defaultValue: 'Google',
        }),
        link: fields.url({ label: 'Link' }),
        location: fields.select({
          label: 'Location',
          options: [
            { label: 'Bronxville', value: 'Bronxville' },
            { label: 'New Rochelle', value: 'New Rochelle' },
            { label: 'Pleasantville', value: 'Pleasantville' },
            { label: 'Stamford', value: 'Stamford' },
            { label: 'Tarrytown', value: 'Tarrytown' },
            { label: 'Yonkers', value: 'Yonkers' },
          ],
          defaultValue: 'Yonkers',
        }),
        type: fields.select({
          label: 'Type',
          options: [
            { label: 'Restaurant', value: 'Restaurant' },
            { label: 'Catering', value: 'Catering' },
          ],
          defaultValue: 'Restaurant',
        }),
        slug: fields.text({
          label: 'Review ID (Filename)',
          description: 'Unique identifier for this review (e.g. review-1).',
          validation: { length: { min: 1 } },
        }),
      },
    }),
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
