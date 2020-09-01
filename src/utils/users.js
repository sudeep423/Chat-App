const users=[]

// addUser, removeUser , getUser, getUserInRoom

const addUser = ({ id, username , room})=>{
    // Clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //
    if(!username || !room){
        return{
            error: 'username and room are required'
        }
    }

    // Check for existing user
    const existingUser = users.find((user)=>{
        return user.room === room && user.username === username
    })

    // Validate username
    if(existingUser){
        return{
            error: 'Username is in use!'
        }
    }

    // Store user
    const user = {id ,username , room}
    users.push(user)
    return {user}

}

const getUser = (id)=>{
    const user = users.find((user)=> user.id===id)
    if(!user){
        return undefined
    }
    return user
}

const getUserInRoom = (room)=>{
    const user = users.filter((user)=> user.room===room)
    return user
}
const removeUser = (id)=>{
    const index = users.findIndex((user)=> user.id===id)
    if(index!==-1){
        return users.splice(index,1)[0]
    }
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUserInRoom
}