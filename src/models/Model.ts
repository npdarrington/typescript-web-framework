import { Callback } from './Eventing';

interface ModelAttributes {}

interface Sync {}

interface Events {
	on(eventName: string, callback: Callback): void;
	trigger(eventName: string): void;
}

export class Model {}
