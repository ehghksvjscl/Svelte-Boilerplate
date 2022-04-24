export function autoFocusOut(el, fnOffEditMode) {

    const elAddEventListener = event => {
        event.stopPropagation()
    }

    const windowAddEventListener = event => {
        fnOffEditMode()
    }

    setTimeout(() => {
        el.addEventListener('click', elAddEventListener)
        window.addEventListener('click', windowAddEventListener)
    })

    return {
        destroy() {
            el.removeEventListener('click', elAddEventListener)
            window.removeEventListener('click', windowAddEventListener)
        }
    }
}