function likes(names) {
    var size = names.length;
    var message;

    switch (true)
    {
       case size === 0:
          message = 'no one likes this';
          return message;
          break;

       case size == 1:
          message = names[0] + ' likes this';
          return message;
          break;

       case size == 2:
          message = names[0] + ' and '+ names[1] + ' like this';
          return message;
          break;

       case size == 3: 
          message = names[0] + ', '+ names[1] + ' and '+ names[2] + ' like this';
          return message;
          break;

       case size >= 4: 
          message = names[0] + ', '+ names[1] + ' and '+ (size-2) + ' others like this';
          return message;
          break;         
    }
}

let data1= {
    id:"HJKdsJbjbj124",
    status:"200",
    likes:[],  
    createAt: "Monday 27 Sept 2021"    
    }

let data2= {
    id:"HJKdsJbjbj124",
    status:"200",
    likes:["Peter"],  
    createAt: "Monday 27 Sept 2021"    
     }

let data3= {
    id:"HJKdsJbjbj124",
    status:"200",
    likes:["Jacob", "Alex"],  
    createAt: "Monday 27 Sept 2021"    
    }

let data4= {
    id:"HJKdsJbjbj124",
    status:"200",
    likes:["Max", "John", "Mark"],  
    createAt: "Monday 27 Sept 2021"    
    }

let data5= {
        id:"HJKdsJbjbj124",
        status:"200",
        likes:["Alex", "Jacob", "Mark", "Max"],  
        createAt: "Monday 27 Sept 2021"    
        }
          
console.log(likes(data1.likes));
console.log(likes(data2.likes));
console.log(likes(data3.likes));
console.log(likes(data4.likes));
console.log(likes(data5.likes));
console.log(likes(["Alex", "Jacob", "Mark", "Max", "Hunter", "Lala"]))
