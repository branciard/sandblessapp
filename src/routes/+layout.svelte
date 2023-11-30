<script lang="ts">
	import '../app.postcss';
	import { onDestroy, onMount } from 'svelte';
	import { authSubscribe, initJuno, type User } from '@junobuild/core';
	import { userStore } from '$lib/stores/user.store';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { AppBar } from '@skeletonlabs/skeleton';
  import { Avatar } from '@skeletonlabs/skeleton';
	import Header from '$lib/components/Header.svelte';
	import Profile from '$lib/components/Profile.svelte';

	let unsubscribe: (() => void) | undefined = undefined;
	onMount(async () => {
		unsubscribe = authSubscribe((user: User | null) => userStore.set(user));

		await initJuno({
			satelliteId: 'fakvy-uqaaa-aaaal-adgra-cai'
		});
	});

	onDestroy(() => unsubscribe?.());
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">
        Logo
      </svelte:fragment>
			<Header />
			<svelte:fragment slot="trail">
				<Profile />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- (sidebarLeft) -->
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<!-- (pageFooter) -->
	<!-- (footer) -->
</AppShell>
