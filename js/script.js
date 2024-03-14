import { contacts } from "./database.js";

const { createApp } = Vue;

createApp({
  data(){
    return{
      contacts,
      last: '',

      // history
      msgHistory: [],
      // Obj msg
      msgObj: {
        date: '',
        message: '',
        status: 'sent'
      },

      activePerson: 0,
    }
  },

  methods:{


  },

  mounted(){
  
  },

}).mount('#app');