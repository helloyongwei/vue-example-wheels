<template>
    <button class="g-button">
        <g-icon :name="icon"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    export default {
        props: ['icon', 'event'],
        methods: {
            sayHi: function() {
                alert('hi')
            }
        }
    }
</script>
<style lang="scss">
    .g-button { font-size: var(--font-size); height: var(--button-height); padding: 0 1em;
        border-radius: var(--border-radius); border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex; justify-content: center; align-items: center;
        vertical-align: middle;
        &:hover { border-color: var(--border-color-hover); }
        &:active { background-color: var(--button-active-bg); }
        &:focus { outline: none; }
    }
</style>