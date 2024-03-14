import { contacts } from "./database.js";

const { createApp } = Vue;

createApp({
  data(){
    return{
      contacts,
      last: '',
      
    }
  },

  methods:{
    // lastmsg
    lastMsg(){
      // last = `${this.contacts.messages[messages.legth-1].message}`;
    },
  },

  mounted(){
    this.lastMsg();
  },

}).mount('#app');