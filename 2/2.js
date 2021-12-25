class Circle{ 
    p = 3.14
    constructor(radius){
      this.radius = radius
    }
    getArea(){
       console.log(this.p * this.radius**2)
    }
    getPrimeter(){
        console.log(2 * this.p * this.radius)
    }
}
const circy = new Circle(11)
circy.getArea()
const circy1 = new Circle(4.44)
circy1.getPrimeter()