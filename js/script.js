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
      newSearch: '',
    }
  },

  methods:{
    last(){
      const temp = this.contacts[this.activePerson].messages;
      console.log(temp,temp.length);
      return this.lastTime = temp[temp.length-1].date, this.lastMsg = temp[temp.length-1].message;
    },
    
    addMsg(){
      const currentDate = new Date();
      this.newObj = {
        date:  currentDate.toLocaleString(),
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
        const currentDate = new Date();
        this.newObj = {
          date: currentDate.toLocaleString(),
          message: 'Ok',
          status: 'received'
        };
        this.contacts[this.activePerson].messages.push(this.newObj);
        
      }, 1000)
    },

    

    // Delete Msg
    // deleteMsg(indice){
      
    //   if(this.todoList[indice].done) this.todoList.splice(indice, 1);
    //   else alert('Attenzione!! finisci prima la tua task!');
      
    //   console.log(this.todoList);
    // },


  },

  mounted(){
    this.last();
  },

  computed:{
    
    contattiFiltrati(){
      
      contacts.forEach(element =>{
        if(element.name.toLowerCase().includes(this.newSearch.toLowerCase())){
          element.visible = true;
        }else {
          element.visible = false;
        }
      })
      return contacts;
      // contacts.filter(contact => contact.name.toLowerCase().includes(this.newSearch.toLowerCase()));
      }
    }
  }).mount('#app');