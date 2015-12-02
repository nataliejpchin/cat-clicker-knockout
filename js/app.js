var ViewModel = function(){
  
  // number of clicks default at 0
  this.clickCount = ko.observable(0);
  
  // name of cat
  this.name = ko.observable('Tabby');
  
  // cat image
  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
  
  //increase number of click by 1 each time the cat image is clicked
  this.incrementCounter = function(){
    
    this.clickCount(this.clickCount() + 1);
    
  }
  
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

ko.applyBindings(new ViewModel);