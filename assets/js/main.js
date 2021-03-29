let app = new Vue({
  el: "#root",
  data: {
    index: 0,
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

    selectContact: function(){

    }
  }
});
