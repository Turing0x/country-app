import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Subject, debounceTime, pipe } from 'rxjs';

@Component({
  selector: 'shared-searchbox',
  templateUrl: './searchbox.component.html',
  styles: [
  ]
})

export class SearchboxComponent implements OnInit, OnDestroy{
  
  private debouncer: Subject<string> = new Subject();

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncer
      .pipe( debounceTime( 600 ) )
      .subscribe( value => {
        this.onDebounce.emit( value )
      })
  }

  ngOnDestroy(): void {
    this.onDebounce.unsubscribe()
  }

  public emitValue( value: string ):void {
    this.onValue.emit( value )
  }

  onKeyPress( term: string ):void {
    this.debouncer.next( term );
  }

}
