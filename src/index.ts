import { User } from './models/User';

const user = new User({ name: 'new record', age: 0 });

user.events.on('change', () => {
	console.log('Change has registered!');
});

user.events.on('change', () => {
	console.log('This change is not a duplication');
});

user.events.trigger('change');
