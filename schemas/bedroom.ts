export default {
    name: 'bedroom',
    type: 'document',
    title: 'Bedroom',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
      },
      {
        name: 'nickName',
        type: 'string',
        title: 'NickName',
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'name',
        },
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        options: {
          //   hotspot: true,
        },
      },
  
      {
        name: 'bio',
        type: 'array',
        title: 'Bio',
        of: [
          {
            title: 'Blog',
            type: 'block'
          },
          //   hotspot: true,
        ],
      },
    ],
  }
  