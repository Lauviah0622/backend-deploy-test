

exports.router = (array) => {

    return array.reduce((acc, num) => (acc + num), 0)
}