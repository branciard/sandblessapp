<script>
	import '../app.postcss';
    import { onMount } from "svelte";
    import { initJuno } from "@junobuild/core";

    onMount(
      async () =>
        await initJuno({
          satelliteId: "fakvy-uqaaa-aaaal-adgra-cai",
        })
    );
</script>

<slot />
