import tabs from '../data/tabs.json'

export default () => tabs.sort((a, b) => a.order - b.order)
