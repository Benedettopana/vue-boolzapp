import { contacts } from "./database.js";

const { createApp } = Vue;
const { DateTime } = luxon;
createApp({
  data(){
    return{
      // youClickMe: false,
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
      // Array di messaggi casuali da estrarre
      messages: [
        "Ciao!",
        "Come stai?",
        "Che bel tempo oggi!",
        "Buona giornata!",
        "Fai attenzione!",
        "Hai fatto un ottimo lavoro!",
        "Divertiti!",
        "Spero tu abbia una fantastica giornata!",
        "Sei incredibile!",
        "Ricordati di sorridere oggi!",
        "Sii gentile con te stesso e con gli altri.",
        "Non mollare mai!",
        "Vai avanti con determinazione!",
        "Oggi è un buon giorno per iniziare qualcosa di nuovo.",
        "Sii la versione migliore di te stesso ogni giorno.",
        "Tutto è possibile se ci credi.",
        "Non guardare mai indietro, il meglio è ancora ad arrivare.",
        "Sogna in grande!",
        "Vivi ogni momento al massimo.",
        "Sii grato per le piccole cose nella vita.",
        "Non smettere mai di imparare.",
        "Goditi il viaggio.",
        "Sii coraggioso e intraprendente.",
        "Lascia che la tua luce interiore risplenda.",
        "Fatti guidare dalla tua passione.",
        "Concentrati sul positivo.",
        "Inizia ogni giorno con un sorriso.",
        "La vita è piena di sorprese meravigliose.",
        "Sii la tua migliore motivazione.",
        "Vivi senza rimpianti."
      ],
      randomMessage: "",
      // /Array di messaggi casuali da estrarre
      dataOra: '',
      darkMode: false,
    }
  },

  methods:{
    last(){
      const temp = this.contacts[this.activePerson].messages;
      console.log(temp,temp.length);
      return this.lastTime = temp[temp.length-1].date, this.lastMsg = temp[temp.length-1].message;
    },
    
    addMsg(){
      this.printData();
      
      this.newObj = {
        date:  this.dataOra,
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
        this.printData();
        this.getRandomMessage();
        console.log(this.randomMessage);
        
        this.newObj = {
          date: this.dataOra,
          message: this.randomMessage,
          status: 'received'
        };
        this.contacts[this.activePerson].messages.push(this.newObj);
        
      }, 1000)
    },

    // Delete Msg
    lastMsgDel(indice){
      const {messages} = this.contacts[indice];
      if(messages.length > 0){
        return messages[messages.length-1].message;
      }else{
        return 'Nessun messaggio presente';
      }
    },

    // funzione toggle hide
    toggleMe(index){
      const allChevron = document.querySelectorAll('.pop');
      allChevron[index].classList.toggle('d-none-me');
    },

    getRandomMessage() {
      const randomIndex = Math.floor(Math.random() * this.messages.length);
      this.randomMessage = this.messages[randomIndex];
    },

    printData(){
      this.dataOra = DateTime.now().setLocale('it').toFormat('dd/MM/yyyy HH:mm:ss')
      return this.dataOra;
    },
    // DarkMode
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      if (this.darkMode) {
        document.documentElement.classList.add('night-mode');
      } else {
        document.documentElement.classList.remove('night-mode');
      }
    },
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