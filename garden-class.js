
export class Garden {
    name = 'noname';
    age = 0;
    trees = [];
    // todo: appleCount (?) нейминг
    allApplesList = [];
    allApplesCount = 0;
    isAbleToEatApplesCount = 0;
    spoiledApplesCount = 0;

    constructor(name, age, treesNum, applesCountForEveryTree) {
        this.name = name;
        this.age = age;
        for (let i = 0; i < treesNum; i++) {
            this.trees.push(new Tree(age, applesCountForEveryTree));
        }
        this.updateAppleInfo();
    }

    // api info
    getGardenAge() {
        return this.age;
    }
    getGardenTreeList() {
        return this.trees;
    }
    getGardenApplesList() {
        let applesList = [];
        this.trees.forEach(function (tree, i, arr) {
            tree.apples.forEach(function (apple, i, arr) {
                applesList.push(apple);
            })
        });
        return applesList;
    }

    // methods
    updateAppleInfo() {
        this.allApplesList = this.getGardenApplesList();
        this.allApplesCount = this.allApplesList.length;

        let ableToEatCounter = 0;
        let spoiledCounter = 0;
        this.allApplesList.forEach(function (apple, i, arr) {
            if (apple.isAbleToEat === true) {
                ableToEatCounter += 1;
            }
            if (apple.isAbleToEat === false && apple.place === 'ground') {
                spoiledCounter += 1;
            }
        });
        this.isAbleToEatApplesCount = ableToEatCounter;
        this.spoiledApplesCount = spoiledCounter;
    }

    addDays(days) {
        this.age += days;
        this.trees.forEach(function (tree, i, arr) {
            tree.addDays(days);
        })
    }

}


export class Tree {
    age = 0;
    apples = [];

    constructor(age, applesCountForEveryTree) {
        this.age = age;
        let i = 0;
        while (i < applesCountForEveryTree) {
            this.apples.push(new Apple());
            i++;
        }
    }

    // api info
    getTreeAge() {
        return this.age;
    }
    getGardenAppleList() {
        return this.apples;
    }

    // methods
    addDays(days) {
        for (let i = 0; i < days; i++) {
            this.addOneDayCheck();
        }
        this.apples.forEach(function (apple, i, arr) {
            apple.addDays(days);
        })
    }
    addOneDayCheck(arr) {
        this.age++;
        if (this.age % 30 == 0) {

            let newapple = new Apple();
            this.apples.push(newapple);

        }
    }
}


export class Apple {
    age = 0;
    isAbleToEat = false;
    place = 'tree';

    constructor() {
        this.age = Math.floor(Math.random() * 31);
        this.checkAppleQality();
    }

    // api info
    getAppleAge() {
        return this.age;
    }
    getAppleSpoilage() {
        if (this.isAbleToEat === true) {
            return 'Не испорчено, можно есть';
        } else {
            return 'Нельзя есть';
        }
    }
    getPlaceOfApple() {
        return this.place;
    }

    // methods
    checkAppleQality() {
        if (this.age === 30) {
            this.isAbleToEat = true;
            this.place = 'ground';
        }
        if (this.age >= 31) {
            this.isAbleToEat = false;
            this.place = 'ground';
        }
    }

    addDays(days) {
        this.age += days;
        this.checkAppleQality();
    }
}