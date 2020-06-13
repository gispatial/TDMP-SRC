<!-- =========================================================================================
    File Name: TheFooter.vue
    Description: Footer component
    Component Name: TheFooter
    ----------------------------------------------------------------------------------------
    Item Name: Tripcarte.Asia Dashboard Management Portal
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template functional>
<footer class="the-footer flex-wrap justify-between" :class="classes">
    <span>&copy; {{ new Date().getFullYear() }} <a href="https://tripcarte.asia/" target="_blank" rel="nofollow">Tripcarte.Asia</a>, All rights Reserved</span>
    <span class="md:flex hidden items-center">
        <span>Developed by TripcarteDevTeam</span>
        <feather-icon icon="SettingsIcon" svgClasses="stroke-current text-danger w-6 h-6" class="ml-2" />
    </span>

</footer>
</template>

<script>
export default {
    name: "the-footer",
    props: {
        classes: {
            type: String,
        },
    }
}
</script>
