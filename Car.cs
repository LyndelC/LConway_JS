using System;

namespace MyApplication
{ 
        class Car : Vehicle
    {
        public string bodyType;
        public string carColour;
        public string upholstery;
        public int doorNo;

    }


    public Car(string bodyType, string carColour, string upholstery, int doorNo,) : Vehicle()
    {
        this.bodyType = bodyType;
        this.carColour = carColour;
        this.upholstery = upholstery;
        this.doorNo = doorNo;


    }
}

