
interface BuildMakerPersonOptions{
    getUUID: () => string;
    getAge: (birthdate: string) => number;
}


interface PersonOptions{
    name: string;
    birthdate: string;
}


const buildMakePerson = ({getAge, getUUID}:BuildMakerPersonOptions) => {
    
    return ({ name, birthdate }:PersonOptions) => {
        return {
            id: getUUID(), 
            name,
            birthdate,
            age: getAge(birthdate)
        }
    }
}

export {
    buildMakePerson
}


