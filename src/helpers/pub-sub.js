// these are like Ruby class (self.X) methods

const PubSub = {
  publish : function(channel, payload){
    const event = new CustomEvent(channel, { detail: payload } );
    console.log(`New event on ${channel} : ${ payload }`);
    document.dispatchEvent(event);
  },
  subscribe: function(channel, callback){
    console.log(`New event on ${channel}`);
    document.addEventListener(channel, callback);
  }
};

module.exports = PubSub;
