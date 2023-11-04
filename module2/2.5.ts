{
  //

  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");
  const resGeneric = createArrayWithGeneric<string>("Bangladesh");


  type User ={
    id: number;
    name: string;
  }

  const resGenericObj = createArrayWithGeneric <User> ({ id: 22, name: "Tareq" });


//   tuple generic 

const createArrayWithTuple = <T,Q>(param1: T, param2: Q): [T,Q] => {
    return [param1, param2];
  };

  const res2 = createArrayWithTuple <string, number> ("Bangladesh", 11);


const addCourseToStudent =<T> (student : T) => {
    const course = 'Next Level Web Development'


return {
    ...student,
    course
}
}


const student1 = addCourseToStudent({name: 'Tareq', email: 'tareq@gmail.com', devType: 'NLWD'})

const student2 = addCourseToStudent({name: 'Anonna', email: 'anonna@gmail.com', devType: 'designer'})


  //
}
