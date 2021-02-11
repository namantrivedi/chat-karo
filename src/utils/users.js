const users = []

const addUser = ({ id, username, room }) => {
    //cleaning the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //Validation of Data to be filled
    if(!username || !room){
        return{
            error: 'Name and Room are required!'
        } 
    }
    

    //Check if user exists
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })


    //validation of name
    if(existingUser){
        return{
            error: 'Username already exists!'
        }
    }

    //Store User
    const user = { id, username, room }
    users.push(user)
    return { user }

}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if(index !== -1){
        return users.splice(index, 1)[0]
    }

} 

const getUser = (id) => {
    return users.find((user) => user.id === id)
}


const getUsersInRoom = (room) => {
    return users.filter((user) => user.room === room )
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}
