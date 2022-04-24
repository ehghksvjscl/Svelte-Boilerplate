<script>
    import { lists } from '~/store/store'
    import { tick } from 'svelte'

    let isEditMode = false
    let title = ""
    let textEditEl

    function addList() {
        if (title.trim()) {
            lists.add({
                title
            })
        }
        offEditMode()
    }

    async function onEditMode() {
        isEditMode = true
        await tick()
        textEditEl && textEditEl.focus()
    }

    function offEditMode() {
        isEditMode = false
        title = ""
    }

</script>
<div class="create-list">
    {#if isEditMode}
        <div class="edit-mode">
            <textarea 
                bind:value={title}
                bind:this={textEditEl}
                on:keydown={e => {
                    e.key === "Enter" && addList()
                    e.key === "Escape" && offEditMode()
                    e.key === "Esc" && offEditMode()
                }}
                placeholder="Enter a title for this card..."></textarea>
            <div class="actions">
                <div class="btn success" on:click={addList}>Add List</div>
                <div class="btn" on:click={offEditMode}>Cancel</div>
            </div>
        </div>
    {:else}
        <div 
            class="add-another-list"
            on:click={onEditMode}>
            + Add another list
        </div>
    {/if}
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
