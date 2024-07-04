const COUNT_NAME = "count"

function setCount(value) {
    window.localStorage.setItem(COUNT_NAME, value)
}

function getCount() {
    return window.localStorage.getItem(COUNT_NAME)
}

export { setCount, getCount }