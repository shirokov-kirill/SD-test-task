import axios from "axios"

export default class ServerConnector {

    constructor(){
        this.state = {
            items: []
        }
    }

    updateItems(callback){
        axios.get('http://127.0.0.1:8080/items')
        .then(res => {
            this.state.items = res.data.items
            console.log(res.data.items)
            callback()
        })
    }

    getItems(){
        return this.state.items
    }

    addItem(item, callback){
        axios.post('http://127.0.0.1:8080/items/add',{
            item: item
        }).then(res =>{
            this.state.items.push(res.data.item)
            console.log(res.data.item)
            callback()
        })
    }
}