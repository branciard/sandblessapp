<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script>
    import { setDoc } from "@junobuild/core";
    import { nanoid } from "nanoid";
  
    let featuredMarks;
    const myId = nanoid();
  
    const insert = async () =>
      (featuredMarks = await setDoc({
        collection: "featuredMarks",
        doc: {
          key: '1',
          data: {
            markId: myId,
          },
        },
      }));
  </script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h1 class="h1">Let's get cracking bones!</h1>
		<p>Start by exploring:</p>
		<ul>
			<li><code class="code">/src/routes/+layout.svelte</code> - barebones layout</li>
			<li><code class="code">/src/app.postcss</code> - app wide css</li>
			<li>
				<code class="code">/src/routes/+page.svelte</code> - this page, you can replace the contents
			</li>
		</ul>
	</div>
    <div class="space-y-5">
        <button on:click="{insert}">add featured Mark</button>

        {#if featuredMarks !== undefined}
        <span>featuredMarks Key: {featuredMarks.key}</span>
        <span>featuredMarks Data: {featuredMarks.data}</span>
        {/if}
        
    </div>


</div>
