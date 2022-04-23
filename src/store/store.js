import { writable } from 'svelte/store'
import cryptoRandomString from 'crypto-random-string'

const repolists = JSON.parse(window.localStorage.getItem('lists')) || []
const cryto = () => cryptoRandomString({length:10})

const _lists = writable(repolists)
_lists.subscribe($lists => {
    window.localStorage.setItem('lists', JSON.stringify($lists))
})

export const lists = {
    subscribe: _lists.subscribe,
    add(payload) {
        const { title } = payload
        _lists.update($lists => {
            $lists.push({
                id: cryto(),
                title,
                cards: []
            })
            return $lists
        })
    }
}