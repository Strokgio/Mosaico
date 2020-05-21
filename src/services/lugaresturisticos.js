
export async function getLugaresTuristicos(){
    const response =await fetch('');
    const responseJson = await response.json()
    return responseJson
}

export default {
    getLugaresTuristicos
}