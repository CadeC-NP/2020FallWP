<template>
<div>
    <div    v-for ="(x,i) in notifications" :key="i"
            class="notification"
            :class="is-$(x.type)">
                <button class="delete"></button>
                {{x.text}}
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>