import { contacts } from "./database.js";

const { createApp } = Vue;

createApp({
  data(){
    return{
      contacts,

      
    }
  },

}).mount('#app');