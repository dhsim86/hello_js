var inheritsFrom = function (child, parent) {
    child.prototype = Object.create(parent.prototype);
};

var ClassA = (function() {

	var _ClassA = function() {
      
      // private variable
      var privateVar = {
        name : "private name",
        name2 : "private name from private method"
      }

      // public, but not inheritied.
      this.getPrivateVar = function(sKey){
        return privateVar[ "" + sKey ];
      };

      // public, but not inherited.
      this.name = "class A";
      
      this.getPrivateName = function(){
        return privateVar.name2;
      }
	}
    
    // private method
    var _printPrivateName = function() {
      console.log(this.getPrivateName());
    }
    
    // public, inherited
    _ClassA.prototype.innerPrint = function() {
      console.log('innerPrint');
    }
	  _ClassA.prototype.print = function() {
        this.innerPrint();
        console.log(this.name);
    }
    _ClassA.prototype.privateVarTest = function () {
      _printPrivateName.call(this);
    }
    
	
	return _ClassA;
})();

var a = new ClassA();
a.print();
console.log(a.getPrivateVar('name'));
a.privateVarTest();

console.log('------')

var ClassB = (function() {
  
    var _ClassB = function() {
      this.name = "class B";
      this.surname = "I'm the child";
    }
    
    
    inheritsFrom(_ClassB, ClassA);
  
    _ClassB.prototype.print = function() {
      ClassA.prototype.print.call(this);
      console.log('after ClassB:print()')
    }
    
    _ClassB.prototype.printSurName = function() {
      this.print();
      console.log(this.surname);
    }
    
    return _ClassB;
})();


var b = new ClassB();
b.printSurName();
