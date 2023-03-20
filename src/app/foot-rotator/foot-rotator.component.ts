import { transition, animate, style, state, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { FoodElements, FOOD_ELEMENTS } from 'src/assets/food-elements/food-elements';

@Component({
  selector: 'app-foot-rotator',
  templateUrl: './foot-rotator.component.html',
  styleUrls: ['./foot-rotator.component.scss'],
})
export class FootRotatorComponent implements OnInit, OnDestroy {
  foodElements: FoodElements[] = FOOD_ELEMENTS;
  selectedGramsCtrl = new FormControl();
  selectedFoodElement: FoodElements = FOOD_ELEMENTS[0];
  selectedFoodCalcProtein: string = 'input grams';
  rotating = false;

  private destroy$ = new Subject<void>();

  constructor() { }

  ngOnInit() {
    this.selectedGramsCtrl.valueChanges
    .pipe(takeUntil(this.destroy$))
    .subscribe(() => {
      this.selectedFoodCalcProtein =
        Math.floor((this.selectedFoodElement?.proteinPercentage ||0) * (this.selectedGramsCtrl.value/100)) +
        'g Protein'
    })

  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onRotate() {
    const numberOfFoodElements = this.foodElements.length;
    const randEl = Math.floor(Math.random() * numberOfFoodElements);
    this.selectedFoodElement = this.foodElements[randEl];

    this.selectedGramsCtrl.reset();
    this.selectedFoodCalcProtein = 'input grams';

    this.rotating = true;
    setTimeout(() => {
      this.rotating = false;
    }, 500);
  }
}

