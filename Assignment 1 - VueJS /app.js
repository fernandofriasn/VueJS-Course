const app = Vue.createApp({
    data(){
        return{
            Name: 'Fernando Frias',
            Age: '23',
            vueImage: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Picture_icon_BLACK.svg'
            
        }
    },
    methods: {
       sumAge (){
            const age = 23;
            const num = 5;

            return age + num;             
        },
        outputFavorite () {
            const randomNumber = Math.random();  
            if (randomNumber < 0.5) {
              return 0;
            }else {
              return 1;
            }
        }

    }
});

app.mount('#assignment')