
export function increment (index) { // increment
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}

export function addComment (postId, author, comment) { // add comment
    console.log('Dispatching add comment');
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

export function removeComment (postId, index) { // remove comment
    return {
        type: 'REMOVE_COMMENT',
        index,
        postId
    }
}
