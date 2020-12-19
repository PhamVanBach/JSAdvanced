var bear = {
	name: 'panda',
  eat: function(){
  	setTimeout(function(){
    	console.log(this.name + ' eat bamboo');
    }.bind(this),2000);
   
    setTimeout(()=>{
    	console.log(this.name + ' eat bamboo....');
    },2000);
    var that = this;
    setTimeout(function(){
    	console.log(that.name + '.......eat bamboo....');
    },2000);
    
  }
}

bear.eat();