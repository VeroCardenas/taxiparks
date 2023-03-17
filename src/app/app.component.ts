import { Component, OnInit } from '@angular/core';
import { of, from, map, tap, take, merge } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'taxi-parks';

  ngOnInit() {
    /*of(2, 4, 6, 8).subscribe(item => console.log(item))

    from([2, 4, 6, 8]).subscribe({
      next: (item) => console.log('resulting item', item),
      error: (error) => console.error('resulting item', error),
      complete: () => console.log('complete')
    })

    this.tryMapTapTake();*/

    const sourceObs1 = of('a', 'b', 'c');
    const sourceObs2 = from([1, 2, 3]);

    merge(sourceObs1, sourceObs2)
      .subscribe(val => console.log(val));

  }

  tryMapTapTake() {
    from([20, 15, 10, 5])
      .pipe(
        tap(item => console.log(`emited item ....' ${item}`)),
        map(item => item * 2),
        map(item => item - 10),
        map(item => {
          if (item===0){
            throw new Error('zero detected')
          }
        }),
        take(2)
        )
      .subscribe({
        next: (item) => console.log('resulting item', item),
        error: (error) => console.error('resulting item', error),
        complete: () => console.log('complete')
      })
  }
}
