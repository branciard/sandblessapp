<script lang="ts">
	import { setDoc, signIn, signOut } from '@junobuild/core';
	import { nanoid } from 'nanoid';
	import { userSignedInStore, userKeyInStore } from '$lib/stores/user.store';

	let featuredMarks: any;
	const myId = nanoid();

	const insert = async () =>
		(featuredMarks = await setDoc({
			collection: 'featuredMarks',
			doc: {
				key: '1',
				data: {
					markId: myId
				}
			}
		}));

	const login = async () => {
		//busy.start();

		try {
			await signIn();
		} catch (err: unknown) {
			console.log(err);

			//	toasts.error({
			//		text: 'Sign-in error.',
			//		detail: err
			//		});
		}

		//busy.stop();
	};
</script>

{#if $userSignedInStore}
	<p>
		<button type="button" class="text" on:click|stopPropagation={signOut}> Sign-out</button>
	</p>
    <p>
        Principal : {$userKeyInStore}
    </p>

{:else}
	<button type="button" on:click|stopPropagation={login}>Sign-in</button>
{/if}
