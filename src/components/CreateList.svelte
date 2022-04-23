<script>
    import { lists } from '~/store/store'

    lists.add({
        title: "Saemi!!"
    })    
</script>
<div class="create-list">
    + Add anoher list
</div>

<style lang="scss">
    .create-list {
        font-size: 16px;
        white-space: normal;
        width: 290px;
        display: inline-block;
        padding: 10px 8px;
        vertical-align: top;
        background: rgba(#ebecf0, .6);
        margin: 0px 4px;
        border-radius: 4px;
        line-height: 20px;
        cursor: pointer;
        transition: .2s;

        &:hover {
            background: #ebecf0;
        }

     }

     
</style>
