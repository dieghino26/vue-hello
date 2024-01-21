console.log("vue ok", Vue);


//global build di Vue
const {createApp} = Vue;
const app = createApp({
    data(){
        return{
            greetings: "hello"
        }
    }
});

app.mount("#root");