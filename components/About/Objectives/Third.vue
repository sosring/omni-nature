<template>

  <article class="space-y-6 md:space-y-0 
     md:flex md:gap-6 lg:items-center lg:gap-12">

     <div class="md:w-5/12 lg:w-6/12">
      <img class="w-full rounded-md object-cover"
       src="/images/waste-management-technology.jpeg" 
       alt="wate management technology">
      </div>

      <div class="md:w-7/12 lg:w-8/12">
        <h3 class="mt-8 heading">
          3. TECHNOLOGIES TO RECYCLE OF WASTE GENERATED AND USE IN AN EFFECTIVE MANNER TYPES OF HOUSEHOLD WASTE Organic Waste
        </h3>

        <div class="mt-4">
          <p class="sub-heading font-bold">
           Organic waste
          </p>
          
          <ul class="mt-4 px-6">
            <li v-for="waste in organic"
             class="list-decimal space-y-2">
              <p v-html="waste.title"
               class="sub-heading"></p> 
              <p v-html="waste.para"></p>
            </li>
          </ul>
        </div>
      </div>
    </article>

    <article>

        <div class="mt-4">
          <p class="sub-heading font-bold">
           Non-organic Recyclable waste (solid rubbish)
          </p>
          
          <ul class="mt-4 px-6">
            <li v-for="waste in nonOrganic"
             class="list-decimal space-y-2">
              <p v-html="waste.title"
               class="sub-heading"></p> 
              <p v-html="waste.para"></p>
            </li>
          </ul>
        </div>

    </article>
</template>

<script setup>
 const organic = [
  {
    title: 'Liquid waste',
    para: "Food leftovers, fruit/vegetable peels, waste tea powder, coffee beans, landscape and pruning waste, other green waste, processed food, raw food materials, meat and bones, food- soiled paper, eggshells, leaf plates."
  },
  {
    title: 'Dry waste',
    para: " Newspapers, magazines, brown paper, paper bags, paper packaging materials, ribbons, strings, leaflets, notebooks, wood, furniture."
  }
 ] 

 const nonOrganic = [
  {
    title: 'Plastic',
    para: 'Plastic bags, containers, jars, bottles, covers, caps, milk pouches, food packets, soda bottles, wrappers.'
  },
  {
    title: 'Metals',
    para: 'Utensils, batteries, pipes, nails, tools, aluminium foils, metal scraps, tetra packs, wires.'
  },
  {
    title: 'Glass',
    para: 'Bottles, plates, cups, shards, mirrors, ceramics.' 
  }
 ]
</script>

<style scoped>
  .heading {
    font-size: clamp(1.1rem, 2.5vw, 1.5rem)
  }

  .sub-heading {
    font-size: clamp(1rem, 2.5vw, 1.2rem);
  }

  .para {
    font-size: clamp(.8rem, 2.5vw, 1rem);
  }

  h3 {
    @apply sub-heading font-montserrat 
    text-title font-medium
  }

  p {
    @apply para font-raleway text-gray-600
  }
</style>
