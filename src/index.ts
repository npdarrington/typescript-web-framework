import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';

const userCollection = new Collection(
	`http://localhost:3000/users`,
	(json: UserProps) => {
		return User.buildUser(json);
	}
);
userCollection.on('change', () => {
	const root = document.getElementById('root');

	if (root) {
		new UserList(root, userCollection).render();
	}
});
userCollection.fetch();
