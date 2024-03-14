import { contacts } from "./database";

const {createdApp} = Vue;

createdApp({
  data(){
    return{
      contacts,
    }
  }
}).mount('#app');