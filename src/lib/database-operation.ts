import { COLLECTIONS } from '../config/constants';
export async function getCharacters(db:any) {
    
    return await db.collection(COLLECTIONS.CHARACTERS).find().sort({id:1}).toArray();

}

export async function getCharacter(db:any,id:string){
    return await db.collection(COLLECTIONS.CHARACTERS).findOne({id});

}
export async function getCharacterVotes(db:any,id:string){
    return await db.collection(COLLECTIONS.VOTES).find({character:id}).count();

}