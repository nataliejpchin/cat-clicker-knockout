// model - all the cat logic
var Cat = function(){
  
  // number of clicks default at 0
  this.clickCount = ko.observable(0);
  
  // name of cat
  this.name = ko.observable('Tabby');
  
  // cat image
  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
  
  
  
  // change cat level based on number of clicks
  this.catLevel = ko.computed(function() {
    
    if(this.clickCount() < 10) {
      return 'Newborn';
    } else {
      return 'Adult';
    }
      
  }, this);
  
  // list of nicknames
  this.nicknames = ko.observableArray([
    { nickname: 'kitty' },
    { nickname: 'blackie' },
    { nickname: 'whity' }
  ]);
}

// octopus
var ViewModel = function(){
  
  this.currentCat = ko.observable( new Cat() );
  
  //increase number of click by 1 each time the cat image is clicked
  this.incrementCounter = function(){
    
    this.currentCat().clickCount(this.currentCat().clickCount() + 1);
    
  }
}

ko.applyBindings(new ViewModel);