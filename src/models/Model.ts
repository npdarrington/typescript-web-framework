import { Callback } from './Eventing';

interface ModelAttributes<T> {
	set(update: T): void;
	getAll(): T;
	get<K extends keyof T>(key: K): T[K];
}

interface Sync {}

interface Events {
	on(eventName: string, callback: Callback): void;
	trigger(eventName: string): void;
}

export class Model {}
