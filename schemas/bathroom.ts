export default {
  name: 'bathroom',
  type: 'document',
  title: 'Bathroom',
  fields: [
    {
      name: 'type',
      type: 'string',
      title: 'Type',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      type: 'array',
      title: 'Description',
      of: [
        {
          title: 'Blog',
          type: 'block',
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'compound',
      type: 'string',
      title: 'Compound',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'collection',
      type: 'string',
      title: 'Collection',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'material',
      type: 'string',
      title: 'Material',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'density',
      type: 'number',
      title: 'Density',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'country',
      type: 'string',
      title: 'Country',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'weight',
      type: 'number',
      title: 'Weight',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
      description: 'Enter a color as text (e.g., "red" or "#FF5733")',
      validation: (Rule: any) => Rule.required().regex(/^#[0-9A-Fa-f]{6}$/).error('Please enter a valid hexadecimal color code.'),
    },
  ],
}
