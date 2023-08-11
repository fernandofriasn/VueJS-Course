const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            counterFinal: '',
            
        };
    },

    methods: {
        add(num){
            this.counter = this.counter + num;
        },
        
    },
    computed: {
        counterFinal() {
            if (this.counter < 37 ){
                return 'Too much!';
            }if (this.counter > 37 ){
                return 'Not There Yet!';
            }else{
                return this.counter;
            }
        },


    },
    watch: {
        


    }
});

app.mount('#assignment');