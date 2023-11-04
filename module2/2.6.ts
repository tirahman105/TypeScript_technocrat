{
    // 
    // constrains 



const addCourseToStudent =<T extends {id: number; name: string; email: string} > (student : T) => {
    const course = 'Next Level Web Development'


return {
    ...student,
    course
}
}

const student1 = addCourseToStudent  <{
    id: number,
    name: string;
    email: string;
    devType: string;
}>({
    
    id: 11,
    name: 'Tareq', 
    email: 'tareq@gmail.com', 
    devType: 'NLWD'
})

const student2 = addCourseToStudent({id: 222, name: 'Anonna', email: 'anonna@gmail.com', devType: 'designer'})























    // 
}