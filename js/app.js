// model - all the cat logic
// object literal called data
// creating a new custom constructor called Cat with data parameter so we can set the properties
var Cat = function(data){
  
  // number of clicks default at 0
  this.clickCount = ko.observable(data.clickCount);
  
  // name of cat
  this.name = ko.observable(data.name);
  
  // cat image
  this.imgSrc = ko.observable(data.imgSrc);
  
  // list of nicknames
  this.nicknames = ko.observableArray(data.nicknames);
  
  //catLevel does not use the data parameter because everycat will always use the same catLevel function
  // change cat level based on number of clicks
  this.catLevel = ko.computed(function() {
    
    if(this.clickCount() < 10) {
      return 'Newborn';
    } else {
      return 'Adult';
    }
      
  }, this);
  
  
}

// octopus
var ViewModel = function(){
  
  // refer to ViewModel scope/binding context
  var self = this;
  
  // set the first cat in the array to show when load
  this.currentCat = ko.observable( new Cat({
    clickCount: 0,
    name: 'Garfield',
    imgSrc: 'img/434164568_fea0ad4013_z.jpg',
    nicknames: ['kitty', 'blacktie', 'whity']
  }) );
  
  //increase number of click by 1 each time the cat image is clicked. Do not need to call this.currentCat.clickcount anymore because already in the currentCat binding context because of the with in index.html
  this.incrementCounter = function(){
    
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    
  }
}

ko.applyBindings(new ViewModel);