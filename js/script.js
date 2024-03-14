import { contacts } from "./database.js";

const { createApp } = Vue;

createApp({
  data(){
    return{
      contacts,
      lastTime: null,
      lastMsg: null,
      activePerson: 0,
      newMsg: '',
      newObj:{
        date: '',
        message: '',
        status: ''
      },
    }
  },

  methods:{
    last(){
      const temp = this.contacts[this.activePerson].messages;
      console.log(temp,temp.length);
      return this.lastTime = temp[temp.length-1].date, this.lastMsg = temp[temp.length-1].message;
    },
    
    addMsg(){
      
      this.newObj = {
        date: '13/03/2024 16:09:55',
        message: this.newMsg,
        status: 'sent'
      }
      
      this.contacts[this.activePerson].messages.push(this.newObj);
      
      // RESET
      this.newObj = {
        date: '',
        message: '',
        status: ''
      }
      this.newMsg = '';
      this.autoReply();
    },

    autoReply(){
      setTimeout(() => {
        this.newObj = {
          date: '10/03/2024',
          message: 'Ok',
          status: 'received'
        };
        this.contacts[this.activePerson].messages.push(this.newObj);
        
      }, 1000)
    }


  },

  mounted(){
    this.last();
  },

}).mount('#app');