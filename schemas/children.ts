import { colorValidation, validation, validationDescription, validationImage, validationStrings } from "../common/validations";

export default {
    name: 'children',
    type: 'document',
    title: 'Children',
    fields: [
      {
        name: 'kind',
        type: 'string',
        title: 'Kind',
        description: 'Towels, Robes ...',
        validation: validation('Kind'),
      },
      {
        name: 'brand',
        type: 'string',
        title: 'Brand',
        description: "HAMAM, L'APPARTEMENT ...",
        validation: validation('Brand'),
      },
      {
        name: 'title',
        type: 'string',
        title: 'Title',
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
        validation: validationDescription('Description'),
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        validation: validationImage('Image'),
      },
      {
        name: 'availability',
        type: 'number',
        title: 'Availability',
        description: 'Goods count 7,  2 ...',
        validation: validation('Availability'),
      },
      {
        name: 'price',
        type: 'number',
        title: 'Price',
        validation: validation('Price'),
      },
      {
        name: 'info',
        title: 'Info',
        type: 'array',
        description: 'Material: Satin, Страна: Россия ...',
        of: [{type: 'string'}],
      },
      {
        name: 'size',
        title: 'Sizes',
        type: 'array',
        of: [{type: 'string'}],
        validation: validationStrings('size'),
      },
      {
        name: 'unavailableSizes',
        title: 'Unavailable Sizes',
        type: 'array',
        of: [{type: 'string'}],
      },
      {
        name: 'color',
        title: 'Colors',
        type: 'array',
        description: 'black, #FFCC554 ...',
        of: [{type: 'string'}],
        validation: colorValidation,
      },
      {
        name: 'unavailableColors',
        title: 'Unavailable Colors',
        type: 'array',
        description: 'black, #FFCC554 ...',
        of: [{type: 'string'}],
      },
      {
        name: 'view',
        title: 'Views',
        type: 'array',
        description: 'With fringe, Classical ...',
        of: [{type: 'string'}],
      },
      {
        name: 'unavailableView',
        title: 'Unavailable Views',
        type: 'array',
        description: 'With fringe, Classical ...',
        of: [{type: 'string'}],
      },
      {
        name: 'type',
        title: 'Type',
        type: 'array',
        description: 'Closed, Open ...',
        of: [{type: 'string'}],
      },
      {
        name: 'Type',
        title: 'Unavailable Type',
        type: 'array',
        description: 'Closed, Open ...',
        of: [{type: 'string'}],
      },
      {
        name: 'gender',
        title: 'Gender',
        type: 'array',
        of: [{type: 'string'}],
        options: {
          list: [
            {title: 'Unisex', value: 'unisex'},
            {title: "Women's", value: 'womens'},
            {title: "Men's", value: 'mens'},
          ],
        },
      },
    ],
  }
  