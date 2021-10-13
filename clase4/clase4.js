const { Observable, map, filter } = require('rxjs')


// clearInterval() en el return del observable
let count = 2;
const miObservable = new Observable((observer) => {
    count++;
    observer.next(count);

    setTimeout(() => {
        observer.complete('completed')
    }, 2000)

    observer.error('Me rompi')
})

const handler = {
    next: (value) => console.log(`RECEIVED DATA: ${value}`),
    complete: (value) => console.log(`RECEIVED COMPLETE: ${value}`),
    error: (value) => console.log(`RECEIVED ERROR: ${value}`)
}


miObservable
    .pipe(
        map(data => data ** 2),
        filter(data => data > 30)
    )
    .subscribe(value => console.log(value))

miObservable.subscribe(handler)