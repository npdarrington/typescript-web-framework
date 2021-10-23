import { AxiosPromise } from 'axios';
import { Callback } from './Eventing';

interface ModelAttributes<T> {
	set(update: T): void;
	getAll(): T;
	get<K extends keyof T>(key: K): T[K];
}

interface Sync<T> {
	fetch(id: number): AxiosPromise;
	save(data: T): AxiosPromise;
}

interface Events {
	on(eventName: string, callback: Callback): void;
	trigger(eventName: string): void;
}

export class Model<T> {
	constructor(
		private attributes: ModelAttributes<T>,
		private events: Events,
		private sync: Sync<T>
	) {}
}
