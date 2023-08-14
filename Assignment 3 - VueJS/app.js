const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            result: '',
            timer: null
            
        };
    },

    methods: {
        add(num){
            this.counter = this.counter + num;
        },
        resetValue(){
            this.result = 0;
        },
        startTimer(){
            clearTimeout = setTimeout(this.resetValue, 5000)
        }
        
    },
    computed: {
        // counter(value) {
        //     if (value > 37 ){
        //         this.result = 'Too Much'
        //     }if(value < 37){
        //         this.result = 'Not There Yet!'
        //     }
            
        //     else{
        //         this.counter = this.counter;
        //     }
        // },
        

    },
    watch: {
        counter(value) {
            if (value > 37 ){
                this.result = 'Too Much'
            }if(value < 37){
                this.result = 'Not There Yet!'
            }
        },
        
        
        
        

        
    }
});

app.mount('#assignment');


// This is just to see if my commits works :)