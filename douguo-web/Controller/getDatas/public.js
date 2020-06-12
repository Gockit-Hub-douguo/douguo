function add (options){
    if(options.Error){
        options.Error = function (error){
                console.log(error)
        }
    }
    return options
}

module.exports = {
    add
}