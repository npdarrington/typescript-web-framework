interface UserProps {
	name?: string;
	age?: number;
}

type Callback = () => void;

type Events = {
	[key: string]: Callback[];
};

export class User {
	events: Events = {};

	constructor(private data: UserProps) {}

	get(propName: string): string | number {
		return this.data[propName];
	}

	set(update: UserProps): void {
		Object.assign(this.data, update);
	}

	on(eventName: string, callback: Callback): void {
		const handlers = this.events[eventName] || [];
		handlers.push(callback);
		this.events[eventName] = handlers;
	}
}
