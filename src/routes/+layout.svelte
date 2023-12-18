<script lang="ts">
	import '../app.postcss';
	import { onDestroy, onMount } from 'svelte';
	import { authSubscribe, initJuno, type User } from '@junobuild/core';
	import { userStore } from '$lib/stores/user.store';
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { AppShell, AppBar, popup, LightSwitch, storePopup, type PopupSettings} from '@skeletonlabs/skeleton';
	import Header from '$lib/components/Header.svelte';
	import Profile from '$lib/components/Profile.svelte';
	import { Menu, Github} from 'lucide-svelte'
	import { page } from '$app/stores';

	let unsubscribe: (() => void) | undefined = undefined;
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow })
	let menu: PopupSettings = { event: 'click', target: 'menu'}

	onMount(async () => {
		unsubscribe = authSubscribe((user: User | null) => userStore.set(user));

		await initJuno({
			satelliteId: 'fakvy-uqaaa-aaaal-adgra-cai'
		});
	});

	onDestroy(() => unsubscribe?.());

	const rootPath = "/";
	const creatorsPath = "/creators";
	const marksPath = "/marks";
	const blessingsPath = "/blessings";
	
	

	$: classesActive = (href: string) => (href === $page.url.pathname ? '' : 'opacity-70');
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar padding="p-1">
			<svelte:fragment slot="lead">
			<span class="relative">
				<button type="button" class="btn variant-ghost-primary p-2" use:popup={menu}><Menu/></button>
				<div class="card shadow-xl py-2" data-popup="menu">
					<nav class="list-nav">
						<ul>
							<li><a href={rootPath} class="{classesActive(rootPath)}">Home</a></li>
							<li><a href={creatorsPath} class="{classesActive(creatorsPath)}">Creators</a></li>
							<li><a href={marksPath} class="{classesActive(marksPath)}">Marks</a></li>
							<li><a href={blessingsPath} class="{classesActive(blessingsPath)}">Blessings</a></li>		
						</ul>
					</nav>
					<div class="arrow bg-surface-100-800-token" />
				</div>
			</span>
			<a class="invert dark:invert-0 pb-1 ml-4" href="/">SAND BLESS</a>		
      </svelte:fragment>
			<svelte:fragment slot="trail">
			
				<div class="space-x-4 hidden lg:flex">
					<a href={rootPath} class="{classesActive(rootPath)}">Home</a>
					<a href={creatorsPath} class="{classesActive(creatorsPath)}">Creators</a>
					<a href={marksPath} class="{classesActive(marksPath)}">Marks</a>
					<a href={blessingsPath} class="{classesActive(blessingsPath)}">Blessings</a>
				</div>
		
				<LightSwitch/>
				<a class="btn variant-ghost-warning p-2" href="https://github.com/branciard" title="Github"><Github /></a>
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
