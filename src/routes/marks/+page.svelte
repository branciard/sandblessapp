
<script lang="ts">
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    const id = $page.url.searchParams.has('id');

 </script>

<h1>Marks List</h1>

<h2>Mark <a href="/marks/1">1</a></h2>
<h2>Mark <a href="/marks/2">2</a></h2>
<h2>Mark <a href="/marks/3">3</a></h2>

<h2>Mark ID is  {id}</h2>
