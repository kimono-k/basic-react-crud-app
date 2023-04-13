import create from "./http-service";

// Interface is based on the object that comes from the API
export interface User {
    id: number;
    name: string;
}


export default create("/users");