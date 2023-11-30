import type { User } from '@junobuild/core';
import { derived, type Readable, writable } from 'svelte/store';

export const userStore = writable<User | undefined | null>(undefined);

export const userSignedInStore: Readable<boolean> = derived(
	userStore,
	(user) => user !== null && user !== undefined
);

export const userKeyInStore: Readable<String> = derived(
	userStore,
	(user) => {
		let result = '';
		if(user !== null && user !== undefined){
			result= user.key;
			console.log(user);
			
			//result= JSON.stringify(user);
		}
		return result;
	}
);

