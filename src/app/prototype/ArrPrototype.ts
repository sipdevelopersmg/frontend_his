export { } // to make it a module

declare global { // to access the global type String
    interface Array<T> {
        sum(prop: any): Number;
        insertToIndex(index:Number,item:any): void;
        orderBy(prop: T): void;
    }
}

/** Menjumlahkan */
Array.prototype.sum = function(prop){
    
    var total = 0
    for ( var i = 0, _len = this.length; i < _len; i++ ) {
        total += this[i][prop]
    }

    return total
    
}

/** menyelipkan data di array index yg sudah di tentukan */
Array.prototype.insertToIndex = function ( index, item ) {
    this.splice( index, 0, item );
};

/** mengurutkan data yang sudah di tentukan */
Array.prototype.orderBy = function( prop ){
    
    function dynamicSort ( property ){
        var sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a,b) {
            /* next line works with strings and numbers, 
            * and you may want to customize it to your needs
            */
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }

    this.sort(dynamicSort(prop));
}
