import {User, UserArgs} from '../../../types';

const users: User[] = [
  {id: 'amitbsen', name: 'Amit Sen'},
  {id: 'matthealy', name: 'Matt Healy'},
];

const resolvers = [
  {
    Query: {
      users: () => users,
      user: (_: any, args: UserArgs) => {
        const {name: nameArg} = args;
        return users.filter(({name}) => name === nameArg);
      },
    },
  },
];

export default resolvers;
