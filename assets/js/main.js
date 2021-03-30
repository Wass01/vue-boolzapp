let app = new Vue({
  el: "#root",
  data: {
    index: 0,
    mesText: '',
    contacts: contacts,
  },
  methods: {
    // getTime: function (date){
    //   let dateTime = new Date(date);
    //   let hours = dateTime.getHours();
    //   let minutes = dateTime.getMinutes();
    //
    //   return `${hours}:${minutes}`
    // },
    lastMes: function(i) {
      let lastMessage = contacts[i].messages;
      return lastMessage[lastMessage.length - 1];
    },

    addMess: function() {
      const date = dayjs().format('DD/MM/YYYY HH:mm:ss');
      if(this.mesText != ''){
          const chat = {
            date,
            text: this.mesText,
            status: 'sent',
          }
          this.contacts[this.index].messages.push(chat);
          this.mesText = '';
        }
    }


  }
});
