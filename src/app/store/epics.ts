import { Injectable } from '@angular/core';

// import { ANIMAL_TYPES } from '../animals/model';

// export const ANIMAL_TYPES = {
//   LION: 'lion',
//   ELEPHANT: 'elephant',
// };

// import { AnimalAPIEpics } from '../animals/api/epics';

// @Injectable()
// export class AnimalAPIEpics {
//   constructor(
//     private service: AnimalAPIService,
//     private actions: AnimalAPIActions,
//   ) {}

//   public createEpic(animalType: AnimalType) {
//     return createEpicMiddleware(this.createLoadAnimalEpic(animalType));
//   }

//   private createLoadAnimalEpic(animalType: AnimalType): Epic<AnimalAPIAction, IAppState> {
//     return (action$, store) => action$
//       .ofType(AnimalAPIActions.LOAD_ANIMALS)
//       .filter(action => actionIsForCorrectAnimalType(animalType)(action))
//       .filter(() => animalsNotAlreadyFetched(animalType, store.getState()))
//       .switchMap(() => this.service.getAll(animalType)
//         .map(data => this.actions.loadSucceeded(animalType, data))
//         .catch(response => of(this.actions.loadFailed(animalType, {
//           status: '' + response.status,
//         })))
//         .startWith(this.actions.loadStarted(animalType)));
//   }
// }

@Injectable()
export class RootEpics {
  constructor(
    //   private animalEpics: AnimalAPIEpics
      ) {}

  public createEpics() {
    return [
    //   this.animalEpics.createEpic(ANIMAL_TYPES.ELEPHANT)
    ];
  }
}