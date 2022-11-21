import { IResolvers } from 'graphql-tools';
import { getCharacter, getCharacters } from '../lib/database-operation';

// Los resolvers de las operaciones de modificación de información
const mutation: IResolvers = {
    Mutation: {
        async addVote(_:void ,{character},{db}){
           const selectCharacter= await getCharacter(db,character);
           if(selectCharacter === null || selectCharacter === undefined){
                return{
                    status: false,
                    message: "El personaje introducido no puede votar",
                    character : await getCharacters(db)
                }
           }
           return{
            status: true,
            message: "El personaje puedevotar",
            character : await getCharacters(db)
        }
        }
        
    }
};

export default mutation;