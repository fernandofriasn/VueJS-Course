const app = Vue.createApp({
    data(){
        return{
            name: '',
            confirmedName: '',
            password: '',
            confirmedPassword: ''

        };
    },
    methods:{
        Alert(){
            alert('Favor Ingresar sus credenciales seguido de la tecla de Enter');

        },
        setName(event){
            this.name = event.target.value;
            
        },
        confirmInput(){
            this.confirmedName = this.name;
            this.confirmedPassword = this.password;
        },
        setPassword(event){
            this.password = event.target.value;
        }



    }
});

app.mount('#assignment')