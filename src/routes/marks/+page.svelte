
<script lang="ts">
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { loadPyodide } from 'pyodide'   
    const id = $page.url.searchParams.has('id');

    let pyodide:any
    let scrubber:any
    let pyodide_loaded:boolean = false
    onMount(async()=>{
        console.log("load pyodide onMount")
        pyodide = await loadPyodide({indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full'})
        console.log(pyodide.runPython(`
            import sys
            sys.version
        `));
       // await pyodide.loadPackage('iscc_core as ')

       // scrubber = pyodide.pyimport("scrubber")

        pyodide_loaded = true;
        console.log("pyodide loaded")
    })



    let counterPromise = getPlanet();
	async function getPlanet() {
        if(pyodide_loaded){
            let result = await pyodide.runPythonAsync("1+1")
            console.log( result);
        }
	}


 </script>


<button class="btn variant-filled-tertiary m-4" on:click={() => counterPromise = getPlanet()}>test </button>



<h1>Marks List</h1>

<h2>Mark <a href="/marks/1">1</a></h2>
<h2>Mark <a href="/marks/2">2</a></h2>
<h2>Mark <a href="/marks/3">3</a></h2>

<h2>Mark ID is  {id}</h2>
