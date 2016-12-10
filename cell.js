function cell(row, column) {

    this.row = row;
    this.column = column;
    this.id = `row${this.row}_column${this.column}`;
    // console.log(typeof row, typeof column, typeof this.row, typeof this.column)
    var links = {};
    var neighbours = this.neighbours = {};
    function link(othercell, bidirectional=true) {
        // console.log(othercell)
        links[othercell.id] = true;
        if(bidirectional == true){
            othercell.link(this, false)
        }
    }

    function unlink(othercell, bidirectional=true) {
        delete links[othercell.id];
        if(bidirectional == true){
            othercell.unlink(this, false);
        }
    }

    function getLinks() {
        return Object.keys(links)
    }

    function isLinked(othercell) {
        if(links[othercell.id]) {
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

    return Object.assign(this, {link, unlink, getLinks, isLinked, setNeighbours, getNeighbours, links})

}

module.exports = {cell};