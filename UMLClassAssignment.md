```mermaid
classDiagram
%%classes in my dissertation

class Game{
   Sting gameName
   int relDate
   String gameGenre
   playGame()
   quitGame()
   pauseGame()
}

class Workout{
    Sring workType
    int workSet
    int workRep
    chooseMuscle()
    selectWeight()
    liftWeight()
    setDownWeight()
}