<script>
  import OpacityButton from "./OpacityButton.svelte";

  const opacities = [
    "0",
    ".25",
    ".5",
    ".75",
    "1"
  ];
  let currentOpacity = '.5';
  let blockClassName;

  const demoClassName = [
    "position:relative",
    "d:flex",
    "flex:wrap",
    "justify-content:center",
    "align-items:center",
    "contain:content",
    "width:full",
    "p:2rem",
    "m:0.625rem",
    "r:0.3125rem",
    "background-color:black"
  ].join(" ");

  const setOpacity = (value) => {
    currentOpacity = value;
  };

  $: {
    blockClassName = [
      "align-items:center",
      "bg:gray-52/.5",
      "border:4;solid;transparent",
      "d:block",
      "d:flex",
      "f:white",
      "p:5;15",
      `background-color:blue/${currentOpacity}!`
    ].join(" ");
  }
</script>

<div>
  <h2 class='font:24 font:heavy m:10'>Opacity</h2>
  <div class="d:flex flex:wrap gap:5 my:10">
    {#each opacities as opacity}
      <OpacityButton
        opacity={opacity}
        onClick={() => setOpacity(opacity)}
      />
    {/each}
  </div>
  <div class={demoClassName}>
    <div class={blockClassName}>
      <code class="f:14 font-color:inherit!">
        background-color:blue/{currentOpacity}
      </code>
    </div>
  </div>
</div>
