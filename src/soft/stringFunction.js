
const STRING_SOLUTIONS = {
    cortaTitulo: function (title) {
        let titulo = title
        if (title.length > 10) {

            titulo = title.substring(0, 15) + ' ...'

        }
        return titulo

    }
}

module.exports = {
    STRING_SOLUTIONS: STRING_SOLUTIONS
}