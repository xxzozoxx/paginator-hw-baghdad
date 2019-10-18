class Paginator {
    constructor(data, itemPerPage) {
        this._data = data
        this._itemPerPage = itemPerPage
        this.page = [];
        for (let i = 0; i < this._data.length - 1; i += this._itemPerPage) {
            this.page.push(this._data.slice(i, i + this._itemPerPage))
        }
        this.currentPage = 0;
    }
    pageNumber(number) {
        return this.page[number]
    }

    set Data(newData) {
        this._data = newData;
        this.page = [];
        for (let i = 0; i < this._data.length - 1; i += this._itemPerPage) {
            this.page.push(this._data.slice(i, i + this._itemPerPage))
        }
    }
    get Data() { return this._data }
    set ItemsPerPage(number) {
        return this._itemPerPage = number;
    }
    get ItemPerPage() { return this._itemPerPage }
    lastPage() {
        return this.page[this.page.length - 1];
    }
    firstPage() {
        return this.page[0]
    }
    get pages() {
        return this.page.length
    }
    nextPage() {
        ++this.currentPage;
        if (this.currentPage > this.page.length - 1) { console.log('you reached the end'); }
        return this.page[this.currentPage]
    }
    prevPage() {
        --this.currentPage;
        if (this.currentPage === 0) { console.log('this is the first page') }
        return this.page[this.currentPage]
    }
}