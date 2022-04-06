<script>
  import AnimationDemo from "./AnimationDemo.svelte";
  import animationClasses from "./animationClasses";
  import { DEMO } from "../../classes/demo.js";
</script>

<div>
  <h2 class='font:32 font:heavy font:italic m:10'>Animations</h2>
  <div class='{DEMO} justify-content:start! grid-cols:4! gap:60;20'>
    {#each animationClasses as animationClass, index (index)}
      <AnimationDemo
        animationClass={animationClass}
      />
    {/each}
  </div>
</div>
