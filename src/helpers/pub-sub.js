// these are like Ruby class (self.X) methods

const PubSub = {
  publish : function(channel, payload){
    const event = new CustomEvent(channel, { detail: payload } );
    console.log(`Published on ${channel} : ${ payload }`);
    document.dispatchEvent(event);
  },
  subscribe: function(channel, callback){
    console.log(`New subscription added on ${channel}`);
    document.addEventListener(channel, callback);
  },
  signForDelivery: function(object, event) {
    console.log(`${object.__proto__.constructor.name} received ${event.detail} on ${event.type}`);
  }
};

module.exports = PubSub;
