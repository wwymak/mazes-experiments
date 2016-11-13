function cell(row, column) {

    this.row = row;
    this.column = column;
    // console.log(typeof row, typeof column, typeof this.row, typeof this.column)
    var links = {};
    var neighbours = {};
    function link(othercell, bidirectional=true) {
        console.log(othercell, othercell)
        links[othercell] = true;
        if(bidirectional == true){
            othercell.link(this, false)
        }
    }

    function unlink(othercell, bidirectional=true) {
        delete links[othercell];
        if(bidirectional == true){
            othercell.unlink(this, false);
        }
    }

    function getLinks() {
        return Object.keys(links)
    }

    function isLinked(othercell) {
        if(links[othercell]) {
            return true
        } else {
            return false
        }
    }

    function setNeighbours(north, south, east, west) {
        neighbours = {north, south, east, west};
    }

    function getNeighbours(){
        return neighbours;
    }

    return Object.assign(this, {link, unlink, getLinks, isLinked, setNeighbours, getNeighbours})

}

module.exports = {cell};