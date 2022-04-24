<script>
  import { lists } from '~/store/store'
  import List from '~/components/List.svelte'
  import CreateList from '~/components/CreateList.svelte'
</script>

<div class="list-container">
    <div class="lists">
        {#each $lists as list (list.id)}
            <List />
        {/each}
    </div>
    <CreateList />
</div>

<style lang="scss">
    .list-container {
        white-space: nowrap;
        font-size: 0;
        width: 100vw;
        height: calc(100vh - 40px);
        padding: 30px;
        border: 10px solid red;
        box-sizing: border-box;
        overflow-x: auto;
        overflow-y: hidden;
        .lists {
            height: 100%;
            border: 10px solid blue;
            box-sizing: border-box;
            white-space: nowrap;
            font-size: 0;
            display: inline-block;
        }
    }
</style>
