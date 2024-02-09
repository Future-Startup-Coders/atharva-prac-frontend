let player={
    0:{
        name:'name',
        rollno:"rollno",
        dob:"dob",
        mobile:"mobile"
    },
    1:{
        name:'Atharva',
        rollno:"95",
        dob:"05-12-2002",
        mobile:"8484941103"
    },
    2:{
        name:'Rohit',
        rollno:"45",
        dob:"30-4-1987",
        mobile:"9763466464"
    },
    3:{
        name:'virat',
        rollno:"18",
        dob:"5-11-1988",
        mobile:"7894561239"
    },
    4:{
        name:'Rahul',
        rollno:"1",
        dob:"10-5-1992",
        mobile:"8469941103"
    }
    
}
console.log("--------------------------------")
// console.log(student[0].name,student[0].rollno,student[0].dob,student[0].mobile)
// console.log(student[1].name,student[1].rollno,student[1].dob,student[1].mobile)
// console.log(student[2].name,student[2].rollno,student[2].dob,student[2].mobile)
// console.log(student[3].name,student[3].rollno,student[3].dob,student[3].mobile)
// for (let i = 0; i <= 4; i++) {
    
//     console.log(student[i].name  ,student[i].rollno,student[i].dob,student[i].mobile);
// }
for (i in student){
    console.log(student[i].name  ,student[i].rollno,student[i].dob,student[i].mobile);
}
