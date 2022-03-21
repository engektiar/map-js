 const student=[
   {id:22, name:'Abdul Kahader'},
   {id:36, name:'laden'},
   {id:33, name:'sona mia'},
   {id:44, name:'abdul Khader'}
 ]
 const names=student.map(s  => s.name);
 console.log(names);
 const ids=student.map(i =>i.id);
 console.log(ids);
 const bagger=student.filter(f=>f.id>40);
 console.log(bagger);
 const baggerOne=student.find(s=>s.id>40);
 console.log(baggerOne);