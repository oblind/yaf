<template>
  <div style="background-color: lightgreen">
    Page2
  </div>
</template>
<script>
export default {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      console.log(to.name)
    })
  }
}
</script>
