

//Resource : https://www.youtube.com/watch?v=EcCTIExsqmI&t=602s

//If we do any, the return type will be any
//Hence we add a generic to the function and param so that it dynamically returns the correct type
function getFirstElement<T>(array:T[]){
    return array[0]
}

const numbers = [1,2,3]
const firstNum = getFirstElement(numbers)

const string = ["1","2","3"]
const firstStr = getFirstElement(string)



// If data type is any, data might cause issues in development later
// Need to figure out a way to dynamically change data type of data field
type ApiResponse = {
    data :any;
    status: number;
}

const response : ApiResponse = {
    data : 1,
    status: 200
}


//Solution
type ApiResponseDynamic<Data> = {
    data :Data;
    status: number;
}

type UserResponse = ApiResponseDynamic<{user:string, age:number}>
type normalResponse = ApiResponseDynamic<{normal:string}>

const userResponse : UserResponse = {
    data : {user:"1", age:2},
    status: 200
}

const normalResponse : normalResponse = {
    data : {normal:"2"},
    status: 200
}   


//Default data type for generic
type defaultResponseDynamic<Data ={country :string}>={
    data : Data,
}

const defaultResponse : defaultResponseDynamic = {
    data : {country:"1"}
}

//Forcing data type to be an object
type ObjectResponseDynamic<Data extends object> = {
    data:Data;
}

//Error becuase string is not an object
// const nonObjectResponse : ObjectResponseDynamic<string> = {
//     data : "1"
// }

const objectResponse : ObjectResponseDynamic<{name:string}> = {
    data : {name:"1"}
}








