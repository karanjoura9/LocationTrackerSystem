const CallBackExample = () => {

    var students = [
        {
            name: 'karan',
            age: '26'
        }, {
            name: 'Sheru',
            age: '3'
        }
    ];


    


    const enrollStudent = (student) =>{
        setTimeout(()=>{
           students.push(student); 
        },3000);
    }

    const getStudents = () =>{
        students.forEach(student => {
            console.log(student);           
        });
    }

    enrollStudent({
        name:'asha',
        age:'48'
    });

    getStudents();


}

export default CallBackExample;