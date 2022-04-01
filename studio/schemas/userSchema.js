export const userSchema = {
  name: 'user',
  title: 'Users',
  type: 'document',
  fields: [
    {
      name: 'userName',
      title: 'User Name',
      type: 'string',
    },
    {
      name: 'transactions',
      title: 'Transactions',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'transaction'}],
        },
      ],
    },
  ],
}